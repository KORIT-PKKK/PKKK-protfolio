/** @jsxImportSource @emotion/react */
import * as S from './styles/FollowViewStyle';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FollowingUI from './model/FollowingUI';
import FollowerUI from './model/FollowerUI';


const FollowView = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header css={S.header}>
                <button css={S.backButton} onClick={() => menuClickHandle('')}><BiLeftArrow /></button>
                <h1 css={S.followTitle}>팔로우 관리</h1>
            </header>
            <div css={S.followContainer}>
                <div css={S.followBox}>
                    <div css={S.followButtonBox}>
                        <button css={S.followingButton}>팔로잉0</button>
                        <button css={S.followerButton}>팔로워0</button>
                    </div>
                </div>
            </div>

            <div>
                <Routes>
                    <Route path="/following" element={<FollowingUI />}></Route>
                    <Route path="/follower" element={<FollowerUI />}></Route>
                </Routes>
            </div>
        </>
    );
};

export default FollowView;