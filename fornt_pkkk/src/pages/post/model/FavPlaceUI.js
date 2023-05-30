/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/FavPlaceUIStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../../Controller/interceptors/TokenRefresher';
const FavPlaceUI = ({ favPlace }) => {
    const [locationFavState, setLocationFavState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userLocFavId = favPlace.userLocFavId;

        if (userLocFavId === null) {
            setLocationFavState(false);
        } else {
            setLocationFavState(true);
        }
    }, [favPlace.userLocFavId]);

    const showPlaceDetail = () => {
        navigate('/locationDetail', { state: { locId: favPlace.locId } });
    }

    const addLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("username", Cookies.get("username"));
        formData.append("elementId", favPlace.locId);
        try {
            const response = await axiosInstance.post(`/api/user/favorite/loc/add`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(true);
            alert(`${favPlace.locName} 장소를 저장하였습니다!`);
        }
    });

    const undoLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("elementId", favPlace.userLocFavId);
        try {
            const response = await axiosInstance.delete(`/api/user/favorite/loc/undo`, { data: formData });
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(false);
            alert(`${favPlace.locName} 장소를 저장취소하였습니다!`);
        }
    });

    return (
        <>
            <div>
                <div css={S.placeContainer}>
                    <div css={S.place} onClick={showPlaceDetail}>
                        <div css={S.placeDetail}>
                            <div>{favPlace.locName}</div>
                            <div><SlArrowRight /></div>
                        </div>
                        <div css={S.placeDetail}>
                            <span>{favPlace.category}</span>
                            <span css={S.placeWordConnection}> · </span>
                            <span>{favPlace.address}</span>
                        </div>
                    </div>
                    <div css={S.favorites}>
                        {locationFavState ?
                            <>
                                <button css={S.placeUnSaveButton} onClick={() => { undoLocationFav.mutate() }}>
                                    <div><AiOutlineStar css={S.placeUnSaveIcon} /></div>
                                    <div css={S.placeUnSaveDetail}>저장됨</div>
                                </button>
                            </>
                            :
                            <>
                                <button css={S.placeSaveButton} onClick={() => { addLocationFav.mutate() }}>
                                    <div><AiOutlineStar css={S.placeSaveIcon} /></div>
                                    <div css={S.placeSaveDetail}>저장</div>
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavPlaceUI;

