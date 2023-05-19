/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/PostUIStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
const PostUI = ({ post }) => {
    let imageUrls = [];

    if (post.picDatas && post.picDatas.includes(',')) {
        imageUrls = post.picDatas.split(',');
        console.log(post.picDatas);
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

    return (
        <>
            <div css={S.feed}>
                <header css={S.header}>
                    <button css={S.profile}>
                        <div css={S.profilePictureBox}>
                            <div css={S.profilePicture}></div>
                        </div>
                        <div>
                            <div css={S.profileID}>{post.name}</div>
                            <div>
                                <span css={S.profileInfo}>사진리뷰 {post.picPostCnt}</span>
                                <span css={S.profileInfo}> · </span>
                                <span css={S.profileInfo}>작성일자 {post.updateAt}</span>
                            </div>
                        </div>
                    </button>
                    <div css={S.follow}>
                        <button css={S.followButton}>팔로우</button>
                    </div>
                    <div css={S.block}>
                        <button css={S.blockButton}>⁝</button>
                    </div>
                </header>
                <main css={mainSetting(imageUrls.length)}>
                    <div css={getStyles(imageUrls)}>
                        {imageUrls.map((url, index) => (
                            index < 3 ?
                                <div css={getIndexCss(index)}>
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
                    <div css={S.footer}>
                        <div css={S.place}>
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
                            <button css={S.favoritesButton}>
                                <div><AiOutlineStar /></div>
                                <div css={S.favoritesDetail}>저장</div>
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default PostUI;

