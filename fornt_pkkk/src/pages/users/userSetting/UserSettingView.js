/** @jsxImportSource @emotion/react */
import * as S from './style/UserSettingViewStyle';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const UserSettingView = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }
    return (
        <div css={S.container}>
            <div css={S.userInfocontainer}>
                <div css={S.userInfoAndBackButton}>
                    <div css={S.userInfoBox}>
                        <div css={S.photoBox}></div>
                        <div css={S.userInfo}>
                            <div css={S.userName}>병수</div>
                            <div css={S.userFunctionBox}>
                                <div css={S.userFunction}>리뷰 0</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로잉 0</div>
                                <div css={S.wordSeparation}>·</div>
                                <div css={S.userFunction}>팔로워 0</div>
                            </div>
                        </div>
                    </div>
                    <div css={S.backButton} onClick={() => menuClickHandle('')}>×</div>
                </div>
                <div css={S.profilemodifyButtonBox}>
                    <button css={S.profilemodifyButton} onClick={() => menuClickHandle('userUpdate')}><FiUser css={S.profilemodifyButtonIcon}/>프로필 편집</button>
                </div>
            </div>
            <div css={S.followSettingContainer}>
                <div css={S.followSettingBox}>
                    <button css={S.followSettingButton}>
                        <div css={S.followSetting}><FiUsers css={S.followSettingIcon}/> 팔로우 관리 </div>
                        <div css={S.addFollowState}>팔로우 신청 1명</div>
                    </button>
                </div>
            </div>
            <div css={S.Buttoncontainer}>
                <div css={S.buttonBox}>
                    <button css={S.button} onClick={() => menuClickHandle('login')}><div>로그아웃</div> <div css={S.logoutUsername}>username</div></button>
                </div>
            </div>
            <div css={S.Buttoncontainer}>
                <div css={S.buttonBox}>
                    <button css={S.button} onClick={() => menuClickHandle('feed')}><div>피드</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('visit')}><div>타임라인</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('review')}><div>리뷰</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('placeFav')}><div>게시물</div></button>
                    <button css={S.button} onClick={() => menuClickHandle('postFav')}><div>장소</div></button>
                </div>
            </div>
            <footer css={S.footer}>
                <div css={S.componyBox}>
                    <button css={S.componyButton}>©PKKK Corp.</button>
                </div>
            </footer>
        </div>
    );
};

export default UserSettingView;