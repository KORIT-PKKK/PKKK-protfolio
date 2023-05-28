/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as S from './styles/PostUIStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../../Controller/interceptors/TokenRefresher';
const PostUI = ({ post, onClick }) => {
    const navigate = useNavigate();
    const rtk = Cookies.get("refreshToken");
    const userId = Cookies.get("userId");
    const [postFavState, setPostFavState] = useState(false);
    const [locationFavState, setLocationFavState] = useState(false);
    const [subState, setSubState] = useState(false);
    let imageUrls = [];
    
    useEffect(() => {
        const userLocFavId = post.userLocFavId;
        const userPostFavId = post.userPostFavId;
        const userSubId = post.userSubId;

        if (userLocFavId === null) {
            setLocationFavState(false);
        } else {
            setLocationFavState(true);
        }

        if (userPostFavId === null) {
            setPostFavState(false);
        } else {
            setPostFavState(true);
        }

        if(userSubId === null) {
            setSubState(false);
        } else {
            setSubState(true);
        }
    }, [post.userLocFavId, post.userPostFavId, post.userSubId]);
    
    let now = new Date();
    let postDate = new Date(post.updateAt);

    let formattedDate = "";
    if (now.toDateString() === postDate.toDateString()) {
        const hours = postDate.getHours();
        let ampm = hours >= 12 ? '오후' : '오전';
        const twelveHoursFormat = hours % 12 || 12;
        const minutes = postDate.getMinutes();
        formattedDate = `${ampm} ${twelveHoursFormat}:${minutes}`;
    } else {
        const year = postDate.getFullYear();
        const month = postDate.getMonth() + 1;
        const day = postDate.getDate();
        formattedDate = `${year}년 ${month}월 ${day}일`;
    }


    if (post.picDatas && post.picDatas.includes(',')) {
        imageUrls = post.picDatas.split(',');
    }

    const getStyles = (imageUrls) => {
        const length = imageUrls.length;
        const map = {
            0: S.blankWrapper,
            1: S.wrapper1,
            2: S.wrapper2,
            3: S.wrapper3
        }

        return map[length] ?? S.wrapper3;
    }

    const getIndexCss = (index) => {
        const map = {
            0: S.box1,
            1: S.box2,
            2: S.box3
        }

        return map[index] ?? null;
    }

    const mainSetting = (length) => {
        const map = {
            0: S.blank,
            1: S.main
        }

        return map[length] ?? S.main;
    }

    const showPostDetail = () => {
        navigate(`/postDetail`, { state: { postId: post.postId } });
    }

    const showOtherUser = () => {
        navigate('/otherUser', { state: { userId: post.userId } });
    }

    const showPlaceDetail = () => {
        navigate('/locationDetail', { state: { locId: post.locId } });
    }


    const addPostFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("username", Cookies.get("username"))
        formData.append("elementId", post.postId)
        try {
            const response = await axiosInstance.post(`/api/user/fav/post/add`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setPostFavState(true);
            alert(`${post.name}님의 게시글을 저장하였습니다!`);
        }
    });

    const undoPostFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("elementId", post.userPostFavId)
        try {
            const response = await axiosInstance.post(`/api/user/fav/post/undo`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setPostFavState(false);
            alert(`${post.name}님의 게시글저장을 취소하였습니다!`);
        }
    });

    const addLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("username", Cookies.get("username"));
        formData.append("elementId", post.locId);
        try {
            const response = await axiosInstance.post(`/api/user/fav/loc/add`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(true);
            alert(`${post.locName} 장소를 저장하였습니다!`);
        }
    });

    const undoLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("elementId", post.userLocFavId);
        try {
            const response = await axiosInstance.post(`/api/user/fav/loc/undo`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(false);
            alert(`${post.locName} 장소를 저장취소하였습니다!`);
        }
    });

    const addSub = useMutation(async () => {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("subUserId", post.userId);
        try {
            const response = await axiosInstance.post(`/api/user/subscribe/add`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setSubState(true);
            alert(`${post.name}님을 팔로우 하였습니다.`);
        }
    });

    const unSub = useMutation(async () => {
        const formData = new FormData();
        formData.append("elementId", post.userSubId);
        try {
            const response = await axiosInstance.post(`/api/user/subscribe/unSub`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setSubState(false);
            alert(`${post.name}님을 팔로우취소 하였습니다.`);
        }
    });
    


    return (
        <>
            <div css={S.feed}>
                <header css={S.header}>
                    <button css={S.profile} onClick={showOtherUser}>
                        <div css={S.profilePictureBox}>
                            <div css={S.profilePicture}></div>
                        </div>
                        <div>
                            <div css={S.profileID}>{post.name}</div>
                            <div>
                                <span css={S.profileInfo}>사진리뷰 : {post.picPostCnt}</span>
                                <span css={S.placeWordConnection}>·</span>
                                <span css={S.profileInfo}>작성일자 : {formattedDate}</span>
                            </div>
                        </div>
                    </button>
                    {(rtk === undefined || parseInt(userId) === parseInt(post.userId)) 
                        ? (<></>)
                        : (<>
                            {subState? 
                                <>
                                    <div css={S.unFollow}>
                                        <button css={S.unFollowButton} onClick={() => { unSub.mutate() }}>팔로잉</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div css={S.follow}>
                                        <button css={S.followButton} onClick={() => { addSub.mutate() }}>팔로우</button>
                                    </div>
                                </>
                            }
                            
                            {postFavState? 
                                <>
                                    <div css={S.postUnSaveButton} onClick={() => { undoPostFav.mutate() }}>
                                        <div><AiOutlineStar css={S.saveUnIcon} /></div>
                                        <div css={S.postUnSave}>저장됨</div>
                                    </div>
                                </>
                                : 
                                <>
                                    <div css={S.postSaveButton} onClick={() => { addPostFav.mutate() }}>
                                        <div><AiOutlineStar css={S.saveIcon} /></div>
                                        <div css={S.postSave}>저장</div>
                                    </div>
                                </>
                            }
                        </>)
                    }
                </header>
                <main css={mainSetting(imageUrls.length)} onClick={showPostDetail}>
                    <div css={getStyles(imageUrls)}>
                        {imageUrls.map((url, index) => (
                            index < 3 ?
                                <div key={index} css={getIndexCss(index)}>
                                    <img src={url} css={S.responsiveImage} />
                                </div> : null
                        ))}
                    </div>
                </main>
                <div>
                    <div css={S.detail}>
                        {post.content}{post.evalScore}
                    </div>
                </div>
                <footer>
                    <div css={S.footer} >
                        <div css={S.place} onClick={showPlaceDetail}>
                            <div css={S.placeDetail}>
                                <div>{post.locName}</div>
                                <div><SlArrowRight /></div>
                            </div>
                            <div css={S.placeDetail}>
                                <span>{post.category}</span>
                                <span css={S.placeWordConnection}> · </span>
                                <span>{post.address}</span>
                            </div>
                        </div>
                        <div css={S.favorites}>
                        {(rtk === undefined || parseInt(userId) === parseInt(post.userId)) 
                            ? <></>
                            : 
                            <>
                                {locationFavState? 
                                    <>
                                        <button css={S.placeUnSaveButton} onClick={() => { undoLocationFav.mutate() }}>
                                            <div><AiOutlineStar css={S.placeUnSaveIcon}/></div>
                                            <div css={S.placeUnSaveDetail}>저장됨</div>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button css={S.placeSaveButton} onClick={() => { addLocationFav.mutate() }}>
                                            <div><AiOutlineStar css={S.placeSaveIcon}/></div>
                                            <div css={S.placeSaveDetail}>저장</div>
                                        </button>
                                    </>
                                }
                            </>
                        }
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default PostUI;

