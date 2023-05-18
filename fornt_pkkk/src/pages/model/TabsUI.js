/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/TabsUIStyle';

const TabsUI = ({ onClick }) => {

    return (
        <>
            <div css={S.menuBar}>
                <span css={S.menu} onClick={() => onClick('/feed')}>피드</span>
                <span css={S.menu} onClick={() => onClick('/visit')}>타임라인</span>
                <span css={S.menu} onClick={() => onClick('/review')}>리뷰</span>
                <span css={S.menu} onClick={() => onClick('/postFav')}>게시판</span>
                <span css={S.menu} onClick={() => onClick('/placeFav')}>장소</span>
            </div>
        </>
    );
};

export default TabsUI;