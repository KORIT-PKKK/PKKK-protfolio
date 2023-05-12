/** @jsxImportSource @emotion/react */
import * as S from './style/UserOutLineStyle';
import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import { GrShare } from 'react-icons/gr';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Feed from '../../posts/feed/Feed';
import Visit from '../../posts/visit/Visit';
import Review from '../../posts/review/Review';

const UserOutLine = () => {
    const navigate = useNavigate();


    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header>
                <header css={S.header}>
                        <div>
                            <button css={S.logo} onClick={() => menuClickHandle('')}><HiHome /></button>
                            <button css={S.pageName} onClick={() => menuClickHandle('')}>PKKK플레이스</button>
                        </div>
                        <div>
                            <button css={S.menuButton} onClick={() => menuClickHandle('myPage')}><BiMenu/></button>
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
                                        <button css={S.reviewButton} >리뷰 <em css={S.count}>0</em></button>
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
                <footer>
                        <div css={S.menuBar}>
                            <span css={S.menu}>피드</span>
                            <span css={S.menu}>방문</span>
                            <span css={S.menu}>리뷰</span>
                            <span css={S.menu}>저장</span>
                        </div>
                </footer>
            </header>

            <main>
            <Routes>
                <Route path="/" element={<Feed/>}></Route>
                <Route path="/visit" element={<Visit/>}></Route>
                <Route path="/review" element={<Review/>}></Route>
            </Routes>
            </main>

            <div css={S.footerBox}>       
                <div css={S.logoutBox}>
                    <button css={S.logoutButton}>로그아웃</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.logoutButton} >전체서비스</button>
                </div>
                <div css={S.serviceBox}>
                    <button css={S.serviceButton}>이용정책</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.serviceButton}>고객센터</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.serviceButton}>신고센터</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.serviceButton}>공지사항</button>
                </div>
                <div css={S.componyBox}>
                    <button css={S.componyButton} onClick={() => menuClickHandle('login')}>©pkkk Corp.</button>
                </div>
            </div>
        </>
    );
};

export default UserOutLine;