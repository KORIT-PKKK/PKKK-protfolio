/** @jsxImportSource @emotion/react */
import * as S from "./styles/PostUpdateViewStyle";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { localURL } from "../../config/ApiURL";
import { useMutation, useQuery } from "react-query";
import RatingUI from "./model/RatingUI";
import { BiLeftArrow } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import PhotoCardUI from "./model/PhotoCardUI";
import { v4 as uuidv4 } from "uuid";
import {
    deleteObject,
    getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import storage from "../../Firebase";
import { axiosInstance } from "../../Controller/interceptors/TokenRefresher";
import EmptyBox from "./model/EmptyBox";

const PostUpdateView = () => {
  const navigate = useNavigate();
  const rtk = Cookies.get("refreshToken");
  const location = useLocation();
  const postId = location.state.postId;
  const [postDetail, setPostDetail] = useState({
    postId: 0,
    userId: 0,
    locId: 0,
    postEvalId:0,
    name: "",
    imageUrl: "",
    postCount: 0,
    picCount: 0,
    flwCount: 0,
    content: "",
    postViewCnt: 0,
    evalScore: "",
    picDatas: "",
    createAt: "",
    updateAt: "",
  });
  const [content, setContent] = useState("");
  const [contentCount, setContentCount] = useState(0);
  const [evalScore, setEvalScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [percentages, setPercentages] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [files, setFiles] = useState([]);
  const fileInput = React.useRef(null);

  let uploadList = [];

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);
      setFiles([...files, ...fileList]);

      const temps = [];
      fileList.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            temps.push(reader.result);
            resolve();
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      return [];
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

    uploadList = [...imageUrls, ...urlList];

    return uploadList;
  };

  useEffect(() => {
    console.log(`del : ${deleteList}, ${deleteList.length}`);
  }, [deleteList]);

  const handleDeleteURL = (url) => {
    const updateList = imageUrls.filter((i) => i !== url);
    setImageUrls(updateList);
    if (deleteList.length < 1){
        setDeleteList([url]);
    } else {
        setDeleteList([...deleteList, url]);
    }
  };

  const handleDeleteTemp = (file) => {
    const updateList = files.filter((i) => i != file);
    setFiles(updateList);
  };

  const handleDelete = async () => {
    if (deleteList.length === 0){
        return;
    }

    console.log(deleteList);
    
    for (const url of deleteList) {
      const path = decodeURIComponent(url.split("?")[0].split("/o/")[1]);

      console.log(`path : ${path}`)
      const fileRef = ref(storage, path);

      if (!fileRef) {
        console.log(`ref가 undefined입니다. 다음 반복으로 넘어갑니다.`);
        continue;
    }

      try {
        await deleteObject(fileRef);
        console.log(`파일 삭제 성공: ${url}`);
      } catch (error) {
        console.log(`파일 삭제 실패: ${url}`, error);
      }
    }
  };

  const postDetailView = useQuery(
    ["postDetailView"],
    async () => {
      if (rtk === undefined) {
        const params = {
          params: {
            postId: postId,
          },
        };
        const response = await axios.get(`${localURL}/api/post/view`, params);
        return response;
      }

      const userId = Cookies.get("userId");
      const params = {
        params: {
          postId: postId,
          userId: userId,
        },
      };
      const response = await axios.get(`${localURL}/api/post/view`, params);
      return response;
    },
    {
      onSuccess: (response) => {
        const post = response.data[0];
        setPostDetail(post);
        setEvalScore(post.evalScore);
        setContent(post.content);
        setContentCount(post.content.length);
        if (post.picDatas && post.picDatas.includes(",")) {
          setImageUrls(post.picDatas.split(","));
        }
      },
    }
  );

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
      setErrorMessage("내용을 10자 이상 입력해주세요. (최대 200자)");
    } else {
      setErrorMessage("");
    }
  };

  if (postDetailView.isLoading) {
    <div>불러오는 중...</div>;
  }

  const updatePost = async () => {
    const data = {
      postId: postDetail.postId,
      locId: postDetail.locId,
      postEvalId:postDetail.postEvalId,
      username: Cookies.get("username"),
      evalScore: evalScore,
      picDatas: uploadList,
      delPicDatas: deleteList,
      content: content,
    };

    console.log(`delList : ${data.delPicDatas}`);
    console.log(`uploadList : ${data.picDatas}`);

    try {
      const response = await axiosInstance.put(`/api/post/update`, data);
      return response;
    } catch {
      alert("게시글을 수정하지 못했습니다.");
    }
  };

  const updateSubmitHandle = async() => {
    const uploadedUrls = await handleUpload();
    console.log(uploadedUrls);
    updatePost().then((res) => {
        if (res.status === 200){
            handleDelete();
            alert("게시글 수정 완료.");
        }
    })
    setFiles([]);
  };

  const addBtnClick = () => {
    fileInput.current.click();
  };

  const backButtonHandle = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div css={S.headerContainer}>
          <div css={S.backButton} onClick={backButtonHandle}>
            <BiLeftArrow />
          </div>
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
              <div css={S.mainStarCheck} />
              <RatingUI onRatingChange={handleRatingChange} />
              <div css={S.starScore}></div>
            </div>
            {
              <div css={S.photoContainer}>
                {imageUrls.map((url) => (
                  <PhotoCardUI
                    key={url}
                    url={url}
                    onClick={() => handleDeleteURL(url)}
                  />
                ))}
                {files.map((file) => (
                  <PhotoCardUI
                    key={file.name}
                    url={URL.createObjectURL(file)}
                    onClick={() => handleDeleteTemp(file)}
                  />
                ))}
                <EmptyBox onClick={addBtnClick} />
                <input
                  multiple={true}
                  type="file"
                  accept=""
                  ref={fileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
            }
            <div>
              <div css={S.mainTextInputContainer}>
                <textarea
                  css={S.mainTextInput}
                  placeholder="리뷰를 작성해주세요."
                  onChange={contentChangeHandle}
                  name="content"
                  value={content}
                />
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
              <button
                css={S.mainTextButton}
                type="button"
                onClick={updateSubmitHandle}
              >
                <BsPencilSquare />
                수정
              </button>
              {/* <button css={S.mainTextButton} type="button"><AiOutlineDelete />삭제</button> */}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PostUpdateView;
