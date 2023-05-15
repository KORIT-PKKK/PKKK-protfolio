/** @jsxImportSource @emotion/react */
import * as S from './style/FollowHomeStyle';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Following from '../following/Following';
import Follower from '../follower/Follower';

const FollowHome = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(`/${path}`);
    }

    return (
        <>
            <header css={S.header}>
                <button css={S.backButton} onClick={() => menuClickHandle('')}><BiLeftArrow/></button>
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
                    <Route path="/following" element={<Following/>}></Route>
                    <Route path="/follower" element={<Follower/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default FollowHome;