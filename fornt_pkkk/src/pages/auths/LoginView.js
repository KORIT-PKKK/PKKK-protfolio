/** @jsxImportSource @emotion/react */
import * as S from './styles/LoginViewStyle';
import React, { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { loginUserState } from '../../store/atoms/login/LoginAtom';

const LoginView = () => {
    const [loginUser, setLoginUser] = useState({ username: "", password: "" });
    const [successLoginUser, setsuccessLoginUser] = useRecoilState(loginUserState);
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(path);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://192.168.2.18:8080/api/auth/signin", JSON.stringify(loginUser), option);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            Cookies.set('refreshToken', refreshToken, { expires: 14 });
            Cookies.set('accessToken', accessToken, { expires: 1 / 24 });
            setsuccessLoginUser(successLoginUser, loginUser);
            alert("환영합니다.");
            window.location.replace("/");
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <>
            <header>
                <div css={S.headerBox}>
                    <button css={S.backButton} onClick={() => menuClickHandle('/')}><BiLeftArrowAlt /></button>
                </div>
            </header>
            <div css={S.logoBox}>
                <h1 css={S.logo}>PKKK 플레이스</h1>
            </div>
            <div css={S.loginInputContainer}>
                <div css={S.nickNameinputBox}>
                    <input type="text" css={S.nickNameInput} placeholder='아이디' onChange={handleChange} name="username" />
                    <BiUser css={S.inputIcon} />
                </div>
                <div css={S.passwordinputBox}>
                    <input type="password" css={S.passwordInput} placeholder='비밀번호' onChange={handleChange} name="password" />
                    <AiOutlineLock css={S.inputIcon} />
                </div>
                <div css={S.loginButtonBox}>
                    <button css={S.loginButton} onClick={loginHandleSubmit} >로그인</button>
                </div>
            </div>
            <div css={S.registerBox}>
                <button css={S.registerButton}>아이디 찾기</button>
                <div css={S.wordSeparation}>|</div>
                <button css={S.registerButton}>비밀번호 찾기</button>
                <div css={S.wordSeparation}>|</div>
                <button css={S.registerButton} onClick={() => menuClickHandle('/auth/register')}>회원가입</button>
            </div>
            <footer css={S.footer}>
                <button css={S.componyButton}>PKKK</button>
                <div css={S.wordSeparation}>|</div>
                <button css={S.centerButton}>회원정보 고객센터</button>
            </footer>
        </>
    );
};

export default LoginView;