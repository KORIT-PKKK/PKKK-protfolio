import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderUI from './model/HeaderUI';
import PlaceUI from './model/PlaceUI';
import PostDetailUI from './model/LocationPostUI';
import { localURL } from '../../config/ApiURL';
import { useQuery } from 'react-query';
import axios from 'axios';

const LocationOverView = () => {
    const location = useLocation();
    const locId = location.state.locId;
    console.log(locId);

    const [locationPosts, setLocationPosts] = useState([]);
    const [locationInfo, setLocationInfo] = useState({});

    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(path);
    }

    const postDetailView = useQuery(["postDetailView"], async () => {
        const params = {
            params: {
                locId: locId
            }
        }
        const response = await axios.get(`${localURL}/api/post/location`, params);
        return response;
    }, {
        onSuccess: (response) => {
            setLocationPosts(response.data);
            setLocationInfo(response.data[0]);
        }
    });

    if (postDetailView.isLoading) {
        <div>불러오는 중...</div>
    }

    console.log(setLocationPosts);
    return (
        <>
            <HeaderUI onClick={menuClickHandle} />
            <PlaceUI locationInfo={locationInfo} />
            {locationPosts.map((locationPost, index) => (
                <PostDetailUI key={index} locationPost={locationPost} />
            ))}
        </>
    );
};

export default LocationOverView;