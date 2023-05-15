/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style/MainViewStyle';
import { HiHome } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import MenuBar from './menuBar/MenuBar';
import UserOutLine from './userOutLine/UserOutLine';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Button from './button/Button';
import Feed from './posts/feed/Feed';
import Review from './posts/review/Review';
import Visit from './posts/visit/Visit';
import PlaceFav from './posts/favorites/placeFav/PlaceFav';
import PostFav from './posts/favorites/postFav/PostFav';


const MainView = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header>
                <div css={S.userOutLine}>
                    <UserOutLine/>
                    <Button children={"글쓰기"}/>
                </div>
                <div>
                    <MenuBar onClick={menuClickHandle}/>
                </div>
            </header>
            <main css={S.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/visit" element={<Visit />} />
                    <Route path="/placeFav" element={<PlaceFav />} />
                    <Route path="/postFav" element={<PostFav />} />
                </Routes>
            </main>
            <footer css={S.footerBox}>       
                <div css={S.logoutBox}>
                    <button css={S.logoutButton}>로그아웃</button>
                    <div css={S.wordSeparation}>|</div>
                    <button css={S.logoutButton} >전체서비스</button>
                </div>
                <div css={S.componyBox}>
                    <button css={S.componyButton}>©pkkk Corp.</button>
                </div>
            </footer>
        </>
    );
};

export default MainView;