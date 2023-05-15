/** @jsxImportSource @emotion/react */
import * as S from './style/LoginViewStyle';
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header>
                <div css={S.headerBox}>
                    <button css={S.backButton} onClick={() => menuClickHandle('')}><BiLeftArrowAlt/></button>
                </div>
            </header>
            <div css={S.logoBox}>
                <h1 css={S.logo}>PKKK 플레이스</h1>
            </div> 
            <div css={S.loginInputContainer}>
                <div css={S.nickNameinputBox}>
                    <input type="text" css={S.nickNameInput} placeholder='아이디'/>
                    <BiUser css={S.inputIcon}/>
                </div>
                <div css={S.passwordinputBox}>
                    <input type="password" css={S.passwordInput} placeholder='비밀번호'/>
                    <AiOutlineLock css={S.inputIcon}/>
                </div>    
                <div css={S.loginButtonBox}>
                    <button css={S.loginButton}>로그인</button>
                </div>
            </div>
            <div css={S.registerBox}>
                <button css={S.registerButton}>아이디 찾기</button>
                <div css={S.wordSeparation}>|</div>
                <button css={S.registerButton}>비밀번호 찾기</button>
                <div css={S.wordSeparation}>|</div>
                <button css={S.registerButton} onClick={() => menuClickHandle('register')}>회원가입</button>
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