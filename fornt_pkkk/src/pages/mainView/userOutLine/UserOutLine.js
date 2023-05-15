/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style/UserOutLineStyle';
import { GrShare } from 'react-icons/gr';

const UserOutLine = () => {
    return (
        <>
            <div css={S.userInfoBox}>
                <div css={S.userInfo}>
                    <div css={S.userInfoLeft}>
                        <div css={S.profileBox}></div>
                    </div>
                    <div>
                        <div css={S.usernameBox}> <div css={S.username}>병수</div> <button css={S.shareButton}><GrShare /></button></div>
                        <div css={S.Buttons}>
                            <button css={S.reviewButton} >리뷰 <em css={S.count}>0</em></button>
                            <button css={S.pictureButton}>사진 <em css={S.count}>0</em></button>
                            <button css={S.followingButton}>팔로잉 <em css={S.count}>0</em></button>
                            <button css={S.followerButton}>팔로워 <em css={S.count}>1M</em></button>
                        </div>
                    </div>
                </div>
                <div css={S.writingBox}>
                    <button css={S.writingButton}>글쓰기</button>
                </div>
            </div>
        </>
    );
};

export default UserOutLine;