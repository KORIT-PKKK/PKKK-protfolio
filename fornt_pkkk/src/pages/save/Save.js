/** @jsxImportSource @emotion/react */
import * as S from './style/SaveStyle';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdStars } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Save = () => {
    return (
        <>
            <div css={S.container}>
                <div css={S.savePlaceMapBox}>
                    <button css={S.savePlaceMap}>
                        <div>이 주변 장소 저장</div> 
                        <div css={S.savePlaceIcon}><MdKeyboardArrowRight/></div>
                    </button>
                </div>
                <button css={S.listCount}>
                    전체 리스트 1
                </button>
                <div css={S.addList}>
                    <div css={S.addListIcon}>
                        <AiOutlinePlusCircle/>
                    </div>
                    새 리스트 만들기
                </div>
                <ul css={S.placeList}>
                    <div css={S.placeListBox}>
                        <div css={S.placeListIcon}>
                            <MdStars/>
                        </div>
                        <div>
                            <div css={S.myPlace}>내 장소</div>
                            <div css={S.myPlaceCount}><FaMapMarkerAlt css={S.myPlaceIcon}/>0</div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    );
};


export default Save;
