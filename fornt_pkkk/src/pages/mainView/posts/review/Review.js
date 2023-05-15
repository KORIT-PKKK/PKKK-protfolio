/** @jsxImportSource @emotion/react */
import * as S from './style/ReviewStyle';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { SiWindows11 } from 'react-icons/si';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Review = () => {
    return (
        <>
            <div css={S.container}>
                <div css={S.themeBox}>
                    <h2 css={S.themeTitle}>태마 <span css={S.themeCount}>0</span></h2>
                    <div css={S.themeButtonBox}>
                        <button css={S.themeButton}>
                            <span css={S.themeIcon}><AiOutlinePlusCircle /></span>
                            테마 만들기
                            </button>
                    </div>
                </div>
                <div css={S.totalContentBox}>
                    <div css={S.contentMenuBox}>
                        <div css={S.contentMenuBoxLeft}>
                            <button css={S.allMenuButton}> <span css={S.allManuIcon}><AiOutlineMenu/></span>전체</button>
                            <div css={S.wordSeparation}>|</div>
                            <button css={S.pictureMenuButton}> <span css={S.pictureMenuIcon}><SiWindows11/></span> 사진/영상</button>
                        </div>
                        <div>
                            <button css={S.sortButton}>최신순 <span css={S.sortIcon}><RiArrowDropDownLine/></span></button>
                        </div>
                    </div>
                    <button css={S.contentBox}>
                        <div css={S.placeBox}>
                            <div css={S.placeName}>스튜디오</div>
                            <div css={S.placeAddress}>부산시 장전동</div>
                        </div>
                        <div css={S.reviewBox}>
                            <div>너무 만족스러웠어요!</div>
                        </div>
                        <div css={S.reviewEmojiBox}>
                            <div css={S.reviewEmojiContent}><span css={S.reviewEmoji}>❤</span>친절해요</div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Review;