/** @jsxImportSource @emotion/react */
import * as S from './styles/PostUpdateViewStyle';
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { localURL } from '../../config/ApiURL';
import { useMutation, useQuery } from 'react-query';
import RatingUI from './model/RatingUI';
import { BiLeftArrow } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import PhotoCardUI from './model/PhotoCardUI';
import { v4 as uuidv4 } from 'uuid'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '../../Firebase';
import { axiosInstance } from '../../Controller/interceptors/TokenRefresher';

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
    const [imageUrls, setImageUrls] = useState([]);
    const [percentages, setPercentages] = useState([]);
    const [files, setFiles] = useState("");

    let initList = imageUrls;
    let deleteList = [];
    let updateList = [];

    const handleChange = (e) => {
        if (e.target.files.length > 0) {
            const fileList = Array.from(e.target.files);
            setFiles(fileList);
            setPercentages(new Array(fileList.length).fill(0));
        }
    }

    const handleUpload = async () => {
        if (files.length === 0) {
            alert("업로드할 이미지를 먼저 선택해주세요.");
            return;
        }

        const urlList = [];

        await Promise.all(
            files.map((file, index) => {
                return new Promise((resolve, reject) => {
                    const storageRef = ref(storage, `/files/${uuidv4()}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);

                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const percent = Math.round(
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                            );

                            const newPercentages = [...percentages];
                            newPercentages[index] = percent;
                            setPercentages(newPercentages);
                        },
                        (err) => {
                            console.log(err);
                            reject(err);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                                .then((url) => {
                                    urlList[index] = url;
                                    resolve();
                                })
                                .catch((error) => reject(error));
                        }
                    );
                });
            })
        );
        return urlList;
    };

    const handleDeleteURL = (url) => {
        const updateList = initList.filter(i => i !== url);
        initList = updateList;
        setImageUrls(updateList);
        deleteList.push(url)

        console.log(`update list : ${updateList}`);
        console.log(`initList : ${initList}`);
        console.log(`delList : ${deleteList}`);
        // setDeleteImageUrls([...deleteImageUrls, url]);
        // setImageUrls((prevImageUrls) => prevImageUrls.filter((imageUrl) => imageUrl !== url));
    };

    const handleDelete = async () => {
        for (const url of deleteList) {
            // URL에서 파일의 경로 추출
            const path = decodeURIComponent(url.split("?")[0].split("/o/")[1]);

            const ref = storage.refFromUrl(path);

            console.log(url);

            // 파일 삭제
            try {
                await ref.delete();
                console.log(`파일 삭제 성공: ${url}`);
            } catch (error) {
                console.log(`파일 삭제 실패: ${url}`, error);
            }
        }
    };


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
            if (post.picDatas && post.picDatas.includes(',')) {
                setImageUrls(post.picDatas.split(','));
                initList = imageUrls;
            }
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


    const updatePost = async (list) => {
        setImageUrls(...imageUrls, ...list)
        const data = {
            "username": Cookies.get("username"),
            "evalScore": evalScore,
            "picDatas": imageUrls,
            "content": content
        }

        try {
            const response = await axiosInstance.put(`/api/post/update`, data);
            return response;
        } catch {
            alert("포스트 업데이트 실패하였습니다.");
        }
    }

    const updateSubmitHandle = () => {
        postUpdate();
    };

    function postUpdate() {
        handleUpload().then((list) => {
            updatePost()
            handleDelete();
            alert("게시글을 업데이트 하였습니다.")
        });
    }

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
                                <input multiple={true} type="file" accept="" onChange={handleChange} />
                            </div>
                        </div>
                        {imageUrls.length === 0 ? (
                            <></>
                        ) : (
                            <div css={S.photoContainer}>
                                {imageUrls.map(url => (
                                    <PhotoCardUI key={url} url={url} onDeleteURL={handleDeleteURL} />
                                ))}
                            </div>
                        )}
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
                            <button css={S.mainTextButton} type="button" onClick={updateSubmitHandle}><BsPencilSquare />수정하기</button>
                            {/* <button css={S.mainTextButton} type="button"><AiOutlineDelete />삭제</button> */}
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default PostUpdateView;