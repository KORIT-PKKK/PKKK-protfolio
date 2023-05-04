/** @jsxImportSource @emotion/react */
import * as S from './style/SaveStyle';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Save = () => {
    return (
        <>
            <div css={S.container}>
                <button css={S.savePlaceMap}>
                    <div>이 주변 장소 저장</div> 
                    <div css={S.savePlaceIcon}><MdKeyboardArrowRight/></div>
                </button>
            </div>
        </>
    );
};


export default Save;
