import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PostUI from './model/PostUI';

const PostView = () => {

    const [postList, setPostList] = useState([]);

    const searchPostList = useQuery(["searchPostList"], async () => {
        const response = await axios.get("http://192.168.2.18:8080/api/post/list")
        return response;
    }, {
        onSuccess: (response) => {
            setPostList(response.data)
        }
    });

    if (searchPostList.isLoading) {
        return <div>불러오는 중...</div>
    }

    console.log(postList)

    return (
        <>
            {postList.length > 0 ? postList.map(post => (<PostUI key={post.postId} post={post}></PostUI>)) : ""}
        </>
    );
};

export default PostView;