/** @jsxImportSource @emotion/react */
import * as S from './style/RegisterStyle';
import React from 'react';

const register = () => {
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
        </>
    );
};

export default register;