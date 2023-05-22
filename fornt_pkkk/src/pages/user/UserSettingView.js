/** @jsxImportSource @emotion/react */
import * as S from './styles/UserSettingViewStyle';
import { FiUser } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const UserSettingView = () => {

    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken");
    const accessTokenDecodedToken = jwtDecode(accessToken);
    const [userOutline, setUserOutline] = useState({
        followeeCount: 0,
        followerCount: 0,
        imageUrl: "",
        introduce: "",
        name: "",
        picCount: 0,
        postCount: 0,
        userId: 0
    });

    const userOutLine = useQuery(["userOutLine"], async () => {
        const params = {
            params: {
                userId: accessTokenDecodedToken.userId,
            },
        };
        const response = await axios.get("http://192.168.2.18:8080/api/user/info", params)
        console.log(response.data[0]);
        return response;
    }, {
        onSuccess: (response) => {
            setUserOutline(response.data[0]);
        }
    });

    const menuClickHandle = (path) => {
        navigate(path);
    }

    const logoutButton = () => {
        Cookies.remove("accessToken", { path: '/' });
        Cookies.remove("refreshToken", { path: '/' });
        window.location.replace("/");
    }

    if (userOutLine.isLoading) {
        <div>...불러오는중</div>
    }

    return (
        <div css={S.container}>
            <div css={S.userInfocontainer}>
                <div css={S.userInfoAndBackButton}>
                    <div css={S.userInfoBox}>
                        <div css={S.photoBox}></div>
                        <div css={S.userInfo}>
                            <div css={S.userName}>{userOutline.name}</div>
                            <div css={S.userFunctionBox}>
                                <div css={S.userFunction}>리뷰 {userOutline.postCount}</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로잉 {userOutline.followeeCount}</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로워 {userOutline.followerCount}</div>
                            </div>
                        </div>
                    </div>
                    <div css={S.backButton} onClick={() => menuClickHandle('/')}>×</div>
                </div>
                <div css={S.profilemodifyButtonBox}>
                    <button css={S.profilemodifyButton} onClick={() => menuClickHandle('/userUpdate')}><FiUser css={S.profilemodifyButtonIcon} />프로필 편집</button>
                </div>
            </div>
            <div css={S.followSettingContainer}>
                <div css={S.followSettingBox}>
                    <button css={S.followSettingButton} onClick={() => menuClickHandle('/follow')}>
                        <div css={S.followSetting}><FiUsers css={S.followSettingIcon} /> 팔로우 관리 </div>
                    </button>
                </div>
            </div>
            <div css={S.Buttoncontainer}>
                <div css={S.buttonBox} onClick={logoutButton}>
                    <button css={S.button}><div>로그아웃</div> <div css={S.logoutUsername}>{accessTokenDecodedToken.username}</div></button>
                </div>
            </div>
            <div css={S.Buttoncontainer}>
                <div css={S.buttonBox}>
                    <button css={S.button} onClick={() => menuClickHandle('/feed')}><div>피드</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('/timeLine')}><div>타임라인</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('/fav')}><div>즐겨찾기</div></button>
                </div>
            </div>
            <footer css={S.footer}>
                <div css={S.componyBox}>
                    <button css={S.componyButton} onClick={() => menuClickHandle('/')}>©PKKK Corp.</button>
                </div>
            </footer>
        </div>
    );
};

export default UserSettingView;