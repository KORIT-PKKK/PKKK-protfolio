/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as S from './style/RegisterViewStyle';
import React from 'react';

const RegisterView = () => {

    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header css={S.header}>
                <div css={S.compony}>PKKK 플레이스</div>
            </header>
            <div css={S.inputBox}>
                <h3 css={S.inputTitle}>아이디</h3>
                <input type="text" css={S.input}/>
                <div css={S.errorMessage}>5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</div>
                <h3 css={S.inputTitle}>비밀번호</h3>
                <input type="password" css={S.input}/>
                <div css={S.errorMessage}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</div>
                <h3 css={S.inputTitle}>이름</h3>
                <input type="text" css={S.input}/>
                <div css={S.errorMessage}>필수 정보입니다.</div>
            </div>
            <div css={S.joinButtonBox}>
                <button css={S.joinButton}>가입하기</button>
            </div>
            <div css={S.footer}>
                <div css={S.componyIcon} onClick={() => menuClickHandle('')}>PKKK플레이스</div>
            </div>
        </>
    );
};

export default RegisterView;