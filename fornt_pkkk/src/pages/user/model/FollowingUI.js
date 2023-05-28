/** @jsxImportSource @emotion/react */
import * as S from './styles/FollowingUIStyle';
import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../../Controller/interceptors/TokenRefresher';
import { localURL } from '../../../config/ApiURL';
import Cookies from 'js-cookie';

const FollowingUI = () => {
    const [followingList, setFollowingList] = useState([]);

    const searchFollowingList = useQuery(["searchFollowingList"], async () => {
        const userId = Cookies.get("userId");

        const response = await axiosInstance.get(`/api/user/subscribe/subTo`, { params: { userId: userId } })
        return response;
    }, {
        onSuccess: (response) => {
            setFollowingList(response.data)
        }
    });

    return (
        <>
            <div css={S.container}>
                <h1 css={S.title}>나의 팔로우</h1>
                {followingList.map(following => (
                        <div css={S.userBox}>
                            <div css={S.photoBox}></div>
                            <div css={S.username}>{following.name}</div>
                            <button css={S.stateButton}>X 팔로우 취소</button>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default FollowingUI;