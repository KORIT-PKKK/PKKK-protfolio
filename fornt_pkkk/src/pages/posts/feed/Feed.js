/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style/FeedStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';



const Feed = () => {
    return (
        <div css={S.feed}>
            <header css={S.header}>
                <button css={S.profile}>
                    <div css={S.profilePictureBox}>
                        <div css={S.profilePicture}></div>
                    </div>
                    <div>
                        <div css={S.profileID}>eunbinID</div>
                        <div>
                            <span css={S.profileInfo}>사진리뷰 0</span>
                            <span css={S.profileInfo}> · </span>
                            <span css={S.profileInfo}>작성일자 05.03수</span>
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
            <main css={S.main}>
                <button css={S.pictureButton}>
                    <div css={S.picture}></div>
                </button>
                <div css={S.detail}>
                    케이크 맛있어요!
                </div>
                <div css={S.tag}>
                    <div>빵이 맛있어요</div>
                    <div>깨끗해요</div>
                </div>
            </main>
            <footer>
                <div css={S.footer}>
                    <div css={S.place}>
                        <div css={S.placeDetail}>
                            <div>넉아웃</div>
                            <div><SlArrowRight/></div>
                        </div>
                        <div css={S.placeDetail}>
                            <span>카페, 디저트</span>
                            <span>부산광역시 부산진구 부전동</span>
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
    );
};

export default Feed;