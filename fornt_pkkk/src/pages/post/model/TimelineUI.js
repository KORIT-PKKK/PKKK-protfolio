/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/TimelineUIStyle';
import { AiOutlineStar } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { SlArrowRight } from 'react-icons/sl';
import { useState } from 'react';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { axiosInstance } from '../../../Controller/interceptors/TokenRefresher';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsPencilSquare } from 'react-icons/bs';
import { useEffect } from 'react';

const TimelineUI = ({ timeLine }) => {
    let now = new Date();
    let imageUrls = [];
    let timeLineDate = new Date(timeLine.updateAt);
    const [locationFavState, setLocationFavState] = useState(false);

    useEffect(() => {
        const userLocFavId = timeLine.userLocFavId;

        if (userLocFavId === null) {
            setLocationFavState(false);
        } else {
            setLocationFavState(true);
        }
    }, [timeLine.userLocFavId]);

    let formattedDate = "";
    if (now.toDateString() === timeLineDate.toDateString()) {
        const hours = timeLineDate.getHours();
        let ampm = hours >= 12 ? '오후' : '오전';
        const twelveHoursFormat = hours % 12 || 12;
        const minutes = timeLineDate.getMinutes();
        formattedDate = `${ampm} ${twelveHoursFormat}:${minutes}`;
    } else {
        const year = timeLineDate.getFullYear();
        const month = timeLineDate.getMonth() + 1;
        const day = timeLineDate.getDate();
        formattedDate = `${year}년 ${month}월 ${day}일`;
    }


    if (timeLine.picDatas && timeLine.picDatas.includes(',')) {
        imageUrls = timeLine.picDatas.split(',');
    }

    const getStyles = (imageUrls) => {
        const length = imageUrls.length;
        const map = {
            0: S.blankWrapper,
            1: S.wrapper1,
            2: S.wrapper2,
            3: S.wrapper3
        }

        return map[length] ?? S.wrapper3;
    }

    const getIndexCss = (index) => {
        const map = {
            0: S.box1,
            1: S.box2,
            2: S.box3
        }

        return map[index] ?? null;
    }

    const mainSetting = (length) => {
        const map = {
            0: S.blank,
            1: S.main
        }

        return map[length] ?? S.main;
    }

    const addLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("username", Cookies.get("username"));
        formData.append("elementId", timeLine.locId);
        try {
            const response = await axiosInstance.post(`/api/user/favorite/loc/add`, formData);
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(true);
            alert(`${timeLine.locName} 장소를 저장하였습니다!`);
        }
    });

    const undoLocationFav = useMutation(async () => {
        const formData = new FormData();
        formData.append("elementId", timeLine.userLocFavId);
        try {
            const response = await axiosInstance.delete(`/api/user/favorite/loc/undo`, { data: formData });
            return response;
        } catch {
            alert("로그인 후 사용해주세요!");
        }
    }, {
        onSuccess: () => {
            setLocationFavState(false);
            alert(`${timeLine.locName} 장소를 저장취소하였습니다!`);
        }
    });

    return (
        <>
            <div css={S.feed}>
                <header css={S.header}>
                    <div css={S.date}>{formattedDate}</div>
                    <div css={S.iconContainer}>
                        <BsPencilSquare css={S.icon} />
                        <BsFillTrashFill css={S.icon} />
                    </div>
                </header >
                <main css={mainSetting(imageUrls.length)} >
                    <div css={getStyles(imageUrls)}>
                        {imageUrls.map((url, index) => (
                            index < 3 ?
                                <div key={index} css={getIndexCss(index)}>
                                    <img src={url} css={S.responsiveImage} />
                                </div> : null
                        ))}
                    </div>
                </main>
                <div>
                    <div css={S.detail}>
                        {timeLine.content}{timeLine.evalScore}
                    </div>
                </div>
                <footer>
                    <div css={S.footer} >
                        <div css={S.place}>
                            <div css={S.placeDetail}>
                                <div>{timeLine.locName}</div>
                                <div><SlArrowRight /></div>
                            </div>
                            <div css={S.placeDetail}>
                                <span>{timeLine.category}</span>
                                <span css={S.placeWordConnection}> · </span>
                                <span>{timeLine.address}</span>
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
                </footer>
            </div >
        </>
    );
};

export default TimelineUI;