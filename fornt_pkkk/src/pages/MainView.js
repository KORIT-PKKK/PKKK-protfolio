/** @jsxImportSource @emotion/react */
import * as S from './styles/MainViewStyle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticationState } from '../store/atoms/auth/AuthAtom';
import LogoUI from './model/LogoUI';
import UserOutLineUI from './model/UserOutLineUI';
import ButtonUI from './model/ButtonUI';
import TabsUI from './model/TabsUI';
import PostView from './post/PostView';
import HistoryView from './post/HistoryView';
import TimelineView from './post/TimelineView';
import FavPostView from './post/FavPostView';
import FavPlaceView from './post/FavPlaceView';


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
                <LogoUI onClick={menuClickHandle} />
                <div css={S.userOutLine}>
                    <UserOutLineUI onClick={menuClickHandle} />
                    <ButtonUI children={"글쓰기"} />
                </div>
                <div>
                    <TabsUI onClick={menuClickHandle} />
                </div>
            </header>
            <main css={S.main}>
                <Routes>
                    <Route path="/" element={<PostView />} />
                    <Route path="/feed" element={<PostView />} />
                    <Route path="/review" element={<HistoryView />} />
                    <Route path="/visit" element={<TimelineView />} />
                    <Route path="/placeFav" element={<FavPlaceView />} />
                    <Route path="/postFav" element={<FavPostView />} />
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