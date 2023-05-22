/** @jsxImportSource @emotion/react */
import * as S from './styles/MainViewStyle';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LogoUI from './model/LogoUI';
import UserOutLineUI from './model/UserOutLineUI';
import ButtonUI from './model/ButtonUI';
import TabsUI from './model/TabsUI';
import PostView from './post/PostView';
import TimelineView from './post/TimelineView';
import Cookies from 'js-cookie';
import RequestLoginUI from './model/RequestLoginUI';
import { useEffect } from 'react';
import FavView from './post/FavView';
import { pathState } from '../store/atoms/path/pathAtom';
import { useRecoilState } from 'recoil';


const MainView = () => {
    const navigate = useNavigate();
    const authRequiredPath = ["/userSetting", "/userUpdate", "/postWriting"];
    const authPath = "/auth";
    const rtk = Cookies.get("refreshToken");
    const authState = rtk !== undefined;
    const [selectPath, setSelectPath] = useRecoilState(pathState);

    useEffect(() => {
        const currentPath = window.location.pathname;
        setSelectPath(currentPath);
    }, []);


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

    const selectClickHandle = (path) => {
        navigate(path);
        setSelectPath(path);
    }

    const getRefreshToken = () => {
        Cookies.set('refreshToken', 'new', { expires: 14 });
    }

    const logoutButton = () => {
        Cookies.remove("accessToken", { path: '/' });
        Cookies.remove("refreshToken", { path: '/' });
        window.location.replace("/");
    }


    return (
        <>
            <header>
                <LogoUI onClick={menuClickHandle} />
                <div css={S.userOutLine}>
                    {authState ? (<UserOutLineUI onClick={selectClickHandle} />) : <RequestLoginUI onClick={menuClickHandle} />}
                    <ButtonUI onClick={menuClickHandle} children={"글쓰기"} />
                </div>
                <div>
                    <TabsUI onClick={selectClickHandle} selectPath={selectPath} />
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
                    {authState ? (<button css={S.logoutButton} onClick={logoutButton}>로그아웃</button>)
                        : (<button css={S.logoutButton} onClick={() => menuClickHandle('/auth/login')}>로그인</button>)}

                    <div css={S.wordSeparation}>|</div>
                    <button css={S.logoutButton} onClick={() => menuClickHandle('/userSetting')}>전체서비스</button>
                </div>
                <div css={S.componyBox}>
                    <button css={S.componyButton} onClick={() => menuClickHandle('')}>©pkkk Corp.</button>
                </div>
            </footer >
            <button onClick={getRefreshToken}>임의로 refreshToken 추가</button>
        </>
    );
};

export default MainView;