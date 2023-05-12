/** @jsxImportSource @emotion/react */
import * as S from './style/FollowingStyle';
import React from 'react';

const Following = () => {
    return (
        <>
            <div css={S.container}>
                <li css={S.followingList}>
                    <div css={S.photoBox}></div>
                    <div css={S.username}>병수</div>
                    <button css={S.followingCancelButton}>팔로우 취소</button>
                </li>
            </div>
        </>
    );
};

export default Following;