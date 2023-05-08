/** @jsxImportSource @emotion/react */
import * as S from './style/VisitStyle';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const Visit = () => {
    return (
        <>
            <div css={S.container}>
                <div css={S.mainContainer}>
                    <div css={S.monthBox}>3월 방문</div>
                    <div css={S.reviewContainer}>
                        <div css={S.reviewHeader}>
                            <div css={S.placeInfo}>
                                <div css={S.placeName}>삼촌집</div>
                                <div css={S.date}>05.03</div>
                                <div css={S.wordSeparation}> ⋅ </div>
                                <div css={S.visitCount}>4번방문</div>
                            </div>
                            <div>
                                <button css={S.bookMark}><AiOutlineStar/></button>
                                <button css={S.deleteButton}><BsTrash/></button>
                            </div>
                        </div>
                        <div css={S.reviewMain}>
                            <div css={S.presidentName}>김사장</div>
                            <div css={S.wordSeparation}> ⋅ </div>
                            <div css={S.price}>20000</div>
                        </div>
                        <div css={S.reviewFooter}>
                            <button css={S.reviewButton}>리뷰 쓰기</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Visit;