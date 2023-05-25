import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PostUI from './model/PostUI';
import { useNavigate } from 'react-router-dom';
import { localURL } from '../../config/ApiURL';

const PostView = () => {

    const [postList, setPostList] = useState([]);
    const navigate = useNavigate();

    const searchPostList = useQuery(["searchPostList"], async () => {
        const response = await axios.get(`${localURL}/api/post/list`)
        return response;
    }, {
        onSuccess: (response) => {
            setPostList(response.data)
        }
    });

    if (searchPostList.isLoading) {
        return <div>불러오는 중...</div>
    }



    const menuClickHandle = (path) => {

        navigate(path);
    }

    return (
        <>
            {postList.length > 0 ? postList.map(post => (<PostUI key={post.postId} post={post} onClick={menuClickHandle} ></PostUI>)) : ""}
        </>
    );
};

export default PostView;