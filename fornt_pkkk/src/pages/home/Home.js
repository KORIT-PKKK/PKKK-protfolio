/** @jsxImportSource @emotion/react */
import * as S from './style/HomeStyle';
import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { GrShare } from 'react-icons/gr';

const Home = () => {
    return (
        <>
           <header css={S.header}>
                <div>
                    <button css={S.logo}><HiHome /></button>
                    <button css={S.pageName}>PKKK플레이스</button>
                </div>
                <div>
                    <button css={S.menuButton}><BiMenu/></button>
                </div>
           </header>
           <main css={S.main}>
                <div css={S.userInfoBox}>
                    <div css={S.userInfo}>
                        <div css={S.userInfoLeft}>
                            <div css={S.profileBox}></div>
                        </div>
                        <div>
                            <div css={S.usernameBox}> <div css={S.username}>병수</div> <button css={S.shareButton}><GrShare /></button></div>
                            <div css={S.Buttons}>
                                <button css={S.reviewButton}>리뷰 <em css={S.count}>0</em></button>
                                <button css={S.pictureButton}>사진 <em css={S.count}>0</em></button>
                                <button css={S.followingButton}>팔로잉 <em css={S.count}>0</em></button>
                                <button css={S.followerButton}>팔로워 <em css={S.count}>1M</em></button>
                            </div>
                        </div>
                    </div>
                    <div css={S.writingBox}>
                        <button css={S.writingButton}>글쓰기</button>
                        <button css={S.mission}>미션</button>
                    </div>
                </div>
           </main>
           <footer css={S.footer}>
                <div css={S.menuBar}>
                    <span css={S.menu}>피드</span>
                    <span css={S.menu}>방문</span>
                    <span css={S.menu}>리뷰</span>
                    <span css={S.menu}>예약∙주문</span>
                    <span css={S.menu}>저장</span>
                </div>
           </footer>

        </>
    );
};

export default Home;