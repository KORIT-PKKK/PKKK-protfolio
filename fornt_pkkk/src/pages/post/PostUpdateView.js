/** @jsxImportSource @emotion/react */
import * as S from './styles/PostUpdateViewStyle';
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { localURL } from '../../config/ApiURL';
import { useQuery } from 'react-query';
import RatingUI from './model/RatingUI';
import { BiLeftArrow } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import PhotoCardUI from './model/PhotoCardUI';

const PostUpdateView = () => {
    const navigate = useNavigate();
    const rtk = Cookies.get("refreshToken");
    const location = useLocation();
    const postId = location.state.postId;
    const [postDetail, setPostDetail] = useState({
        postId: 0,
        userId: 0,
        locId: 0,
        name: "",
        imageUrl: "",
        postCount: 0,
        picCount: 0,
        flwCount: 0,
        content: "",
        postViewCnt: 0,
        evalIds: "",
        picDatas: "",
        createAt: "",
        updateAt: "",
    });
    const [content, setContent] = useState("");
    const [contentCount, setContentCount] = useState(0);
    const [evalScore, setEvalScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');


    const postDetailView = useQuery(["postDetailView"], async () => {

        if (rtk === undefined) {
            const params = {
                params: {
                    postId: postId
                }
            }
            const response = await axios.get(`${localURL}/api/post/view`, params);
            return response;
        }

        const userId = Cookies.get("userId");
        const params = {
            params: {
                postId: postId,
                userId: userId
            }
        }
        const response = await axios.get(`${localURL}/api/post/view`, params);
        return response;

    }, {
        onSuccess: (response) => {
            const post = response.data[0]
            setPostDetail(post);
            setContent(post.content);
            setContentCount((post.content).length);
        }
    });

    const handleRatingChange = (score) => {
        if (score < 0) {
            setEvalScore(0);
        } else {
            setEvalScore(score);
        }
    };

    const contentChangeHandle = (e) => {
        const inputValue = e.target.value;
        setContent(inputValue);
        setContentCount(inputValue.length);

        if (inputValue.length < 10 || inputValue.length > 200) {
            setErrorMessage('글자 수는 10자 이상 200자 이하여야 합니다.');
        } else {
            setErrorMessage('');
        }
    };

    if (postDetailView.isLoading) {
        <div>불러오는 중...</div>
    }

    const backButtonHandle = () => {
        navigate("/");
    }

    console.log(postDetail);

    return (
        <>
            <div>
                <div css={S.headerContainer}>
                    <div css={S.backButton} onClick={backButtonHandle}><BiLeftArrow />리뷰 업데이트 종료</div>
                </div>
                <div css={S.postContainer}>
                    <header>
                        <div css={S.post}>
                            <h1>게시글 작성</h1>
                        </div>
                        <div css={S.footer}>
                            <div css={S.place}>
                                <div css={S.placeDetail}>
                                    <div css={S.placeTitle}>{postDetail.locName}</div>
                                    <div css={S.placeTimeDate}>2023.5.16 (화)</div>
                                </div>
                                <div css={S.detailContainer}>
                                    <div css={S.detail}>{postDetail.category}</div>
                                    <div css={S.wordConnection}>·</div>
                                    <div css={S.detail}>{postDetail.address}</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div css={S.mainContainer}>
                            <div css={S.mainStarCheck}>별점을 체크해주세요!</div>
                            <RatingUI onRatingChange={handleRatingChange} />
                            <div css={S.starScore}>
                            </div>
                            <div>
                                <input multiple={true} type="file" accept="" />
                            </div>
                        </div>
                        <div css={S.photoContainer}>
                            <PhotoCardUI />
                        </div>
                        <div>
                            <div css={S.mainTextInputContainer}>
                                <textarea css={S.mainTextInput} placeholder=' 리뷰글 작성하기
                                다른 사용자들이 상처받지 않도록 좋은 표현을 사용해주세요.
                                유용한 Tip도 남겨주세요!' onChange={contentChangeHandle} name='content'
                                    value={content} />
                            </div>
                        </div>
                        {errorMessage && <div css={S.error}>{errorMessage}</div>}
                        <div css={S.wordCountContainer}>
                            <div>PKKK플레이스</div>
                            <div>{contentCount}/200</div>
                        </div>
                    </main>
                    <footer>
                        <div css={S.mainTextContainer}>
                            <button css={S.mainTextButton} type="button"><BsPencilSquare />수정하기</button>
                            {/* <button css={S.mainTextButton} type="button"><AiOutlineDelete />삭제</button> */}
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default PostUpdateView;