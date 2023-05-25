/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as S from './styles/PostUIStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../../Controller/interceptors/TokenRefresher';
import jwtDecode from 'jwt-decode';
const PostUI = ({ post, onClick }) => {
    const [postSaveState, setPostSaveState] = useState(false);
    const [locationSaveState, setLocationSaveState] = useState(false);
    const navigate = useNavigate();
    let imageUrls = [];

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
            const response = await axiosInstance.post(`/api/post/fav/add/post`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setPostSaveState(true);
        }
    });

    const addLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("username", Cookies.get("username"));
        formData.append("elementId", post.locId);
        try {
            const response = await axiosInstance.post(`/api/post/fav/add/loc`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: (response) => {
            setLocationSaveState(true);
        }
    });

    const addSub = useMutation(async () => {
        const atk = Cookies.get("accessToken"); 
        const userId = jwtDecode(atk).userId;
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("subUserId", post.userId);
        try {
            const response = await axiosInstance.post(`/api/user/addsub`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
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
                    <div css={S.follow}>
                        <button css={S.followButton} onClick={() => { addSub.mutate() }}>팔로우</button>
                    </div>
                    {postSaveState ?
                        <div css={S.postDeleteSaveButton} >
                            <div><AiOutlineStar css={S.saveIcon} /></div>
                            <div>저장</div>
                        </div>
                        : <div css={S.postSaveButton} onClick={() => { addPostFav.mutate() }}>
                            <div><AiOutlineStar css={S.saveIcon} /></div>
                            <div>저장</div>
                        </div>
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
                            <button css={S.placeSaveButton} onClick={() => { addLocationFav.mutate() }}>
                                <div><AiOutlineStar /></div>
                                <div css={S.placeSaveDetail}>저장</div>
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default PostUI;

