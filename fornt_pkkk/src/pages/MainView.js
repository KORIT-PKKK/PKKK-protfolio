/** @jsxImportSource @emotion/react */
import React, { useDeferredValue } from 'react';
import * as S from './styles/MainViewStyle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticationState } from '../store/atoms/auth/AuthAtom';
import Logo from './model/Logo';
import UserOutLine from './model/UserOutLine';
import Button from './model/Button';
import TabsUI from './model/TabsUI';
import Feed from './model/Feed';
import Review from './model/Review';
import Visit from './model/Visit';
import PlaceFav from './model/PlaceFav';
import PostFavUI from './model/PostFavUI';

const MainView = () => {
    const navigate = useNavigate();
    const { authState } = useRecoilValue(authenticationState);
    const authRequiredPath = ["/userSetting", "/userUpdate", "/postWriting"];
    const authPath = "/auth";

    const menuClickHandle = (path) => {
        if (!authState && authRequiredPath.some(authPath => path.startsWith(authPath))) {
            console.log(`current state : ${authState} `);
            navigate("/auth/login");
        }

        if (authState && path.startsWith(authPath)) {
            navigate("/");
        }

        navigate(path);
    }

    return (
        <>
            <header>
                <Logo onClick={menuClickHandle} />
                <div css={S.userOutLine}>
                    <UserOutLine onClick={menuClickHandle} />
                    <Button children={"글쓰기"} />
                </div>
                <div>
                    <TabsUI onClick={menuClickHandle} />
                </div>
            </header>
            <main css={S.main}>

                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/visit" element={<Visit />} />
                    <Route path="/placeFav" element={<PlaceFav />} />
                    <Route path="/postFav" element={<PostFavUI />} />
                </Routes>
            </main>
            <footer css={S.footerBox}>
                <div css={S.logoutBox}>
                    <button css={S.logoutButton} onClick={() => menuClickHandle('/auth/login')}>로그아웃</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.logoutButton} onClick={() => menuClickHandle('/userSetting')}>전체서비스</button>
                </div>
                <div css={S.componyBox}>
                    <button css={S.componyButton} onClick={() => menuClickHandle('')}>©pkkk Corp.</button>
                </div>
            </footer>
        </>
    );
};

export default MainView;