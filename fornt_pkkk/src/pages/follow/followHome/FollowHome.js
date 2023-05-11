/** @jsxImportSource @emotion/react */
import * as S from './style/FollowHomeStyle';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const FollowHome = () => {
    return (
        <>
            <header css={S.header}>
                <button css={S.backButton}><BiLeftArrow/></button>
                <h1 css={S.followTitle}>팔로우 관리</h1>
            </header>   
        </>
    );
};

export default FollowHome;