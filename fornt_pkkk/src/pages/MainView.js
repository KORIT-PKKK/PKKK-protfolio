/** @jsxImportSource @emotion/react */
import * as S from './styles/MainViewStyle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LogoUI from './model/LogoUI';
import UserOutLineUI from './model/UserOutLineUI';
import ButtonUI from './model/ButtonUI';
import TabsUI from './model/TabsUI';
import PostView from './post/PostView';
import HistoryView from './post/HistoryView';
import TimelineView from './post/TimelineView';
import FavPostView from './post/FavPostView';
import FavPlaceView from './post/FavPlaceView';
import Cookies from 'js-cookie';
import RequestLoginUI from './model/RequestLoginUI';
import { useState } from 'react';
import FavView from './post/FavView';


const MainView = () => {
    const navigate = useNavigate();
    const authRequiredPath = ["/userSetting", "/userUpdate", "/postWriting"];
    const authPath = "/auth";
    const rtk = Cookies.get("refreshToken");
    const authState = rtk !== undefined;
    const [selectPath, setSelectPath] = useState("/feed");


    const menuClickHandle = (path) => {
        if (!authState && authRequiredPath.some(authPath => path.startsWith(authPath))) {
            console.log(`current state : ${rtk}`);
            navigate("/auth/login");
            return;
        }

        if (authState && path.startsWith(authPath)) {
            navigate("/");
            return;
        }

        navigate(path);
    }

    const tabsClickHandle = (path) => {
        navigate(path);
        setSelectPath(path);
    }

    return (
        <>
            <header>
                <LogoUI onClick={menuClickHandle} />
                <div css={S.userOutLine}>
                    {authState ? (<UserOutLineUI onClick={menuClickHandle} />) : <RequestLoginUI onClick={menuClickHandle} />}
                    <ButtonUI children={"글쓰기"} />
                </div>
                <div>
                    <TabsUI onClick={tabsClickHandle} selectPath={selectPath} />
                </div>
            </header >
            <main css={S.main}>
                <Routes>
                    <Route path="/" element={<PostView />} />
                    <Route path="/feed" element={<PostView />} />
                    <Route path="/timeLine" element={<TimelineView />} />
                    <Route path="/fav/*" element={<FavView />} />
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