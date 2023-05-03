/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style/FeedStyle';
import { CiMenuKebab } from 'react-icons/ci';


const Feed = () => {
    return (
        <div css={S.feed}>
            <header css={S.header}>
                <button css={S.profile}>
                    <div css={S.profilePicture}>사진</div>
                    <div>
                        <div css={S.profileInfo}>eunbinID</div>
                        <div css={S.profileInfo}>
                            <span>사진리뷰 0</span>
                            <span>작성일자 05.03수</span>
                        </div>
                    </div>
                </button>
                <div css={S.follow}>
                    <button css={S.followButton}>팔로우</button>
                </div>
                <div css={S.block}>
                    <button css={S.blockButton}><CiMenuKebab /></button>
                </div>
            </header>
            <main css={S.main}>
                <div css={S.picture}></div>
                <div css={S.detail}>
                    케이크 맛있어요!
                </div>
                <div css={S.tag}>
                    <div>빵이 맛있어요</div>
                    <div>깨끗해요</div>
                </div>
            </main>
            <footer css={S.footer}>
                <div>
                    <div css={S.place}>
                        <div>넉아웃</div>
                        <div>
                            <div>카페, 디저트</div>
                            <div>부산광역시 부산진구 부전동</div>
                        </div>
                    </div>
                    <div css={S.favorites}></div>
                </div>
            </footer>
        </div>
    );
};

export default Feed;