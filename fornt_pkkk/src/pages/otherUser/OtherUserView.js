/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/OtherUserViewStyle';
import LogoUI from '../model/LogoUI';
import { useLocation, useNavigate } from 'react-router-dom';
import OtherUserOutLineUI from './model/OtherUserOutLineUI';
import ButtonUI from './model/ButtonUI';
import { useQuery } from 'react-query';
import { localURL } from '../../config/ApiURL';
import axios from 'axios';
import { useState } from 'react';
import UserPostUI from './model/UserPostUI';

const OtherUserView = () => {
    const location = useLocation();
    const userId = location.state.userId;
    const [userPosts, setUserPosts] = useState([]);


    const userPostOverView = useQuery(["userPostOverView"], async () => {
        const params = {
            params: {
                userId: userId,
            },
        };
        const response = await axios.get(`${localURL}/api/post/user`, params)
        return response;
    }, {
        onSuccess: (response) => {
            setUserPosts(response.data);
        }
    });

    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(path);
    }

    return (
        <>
            <LogoUI onClick={menuClickHandle} />
            <div css={S.userOutLine}>
                <OtherUserOutLineUI userId={userId} />
                <ButtonUI />
            </div>
            <div css={S.container}>
                <div css={S.reviewContainer}>
                    {userPosts.map(post => (
                        <UserPostUI key={post.postId} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OtherUserView;