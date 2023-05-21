/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/UserOutLineUIStyle';
import { GrShare } from 'react-icons/gr';

const UserOutLineUI = ({ onClick }) => {
    return (
        <>
            <div css={S.userInfoBox}>
                <div css={S.userInfo}>
                    <div css={S.userInfoLeft}>
                        <div css={S.profileBox} onClick={() => onClick('/userUpdate')}></div>
                    </div>
                    <div>
                        <div css={S.usernameBox} onClick={() => onClick('/userUpdate')}><div css={S.username}>병수</div> <button css={S.shareButton}><GrShare /></button></div>
                        <div css={S.Buttons}>
                            <button css={S.reviewButton} onClick={() => onClick('/timeLine')}>리뷰 <em css={S.count}>0</em></button>
                            <button css={S.pictureButton} onClick={() => onClick('/timeLine')}>사진 <em css={S.count}>0</em></button>
                            <button css={S.followingButton} onClick={() => onClick('/follow/following')}>팔로잉 <em css={S.count}>0</em></button>
                            <button css={S.followerButton} onClick={() => onClick('/follow/follower')}>팔로워 <em css={S.count}>1M</em></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserOutLineUI;