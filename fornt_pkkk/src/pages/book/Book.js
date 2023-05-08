/** @jsxImportSource @emotion/react */
import * as S from './style/BookStyle';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';

const Book = () => {
    return (
        <>
            <header css={S.bookButtonHeader}>
                <div css={S.bookButtonBox}>
                    <div css={S.bookButton}><AiOutlineCalendar fill='#ffffff'/>예약</div>
                    <div css={S.orderButton}><ImSpoonKnife/> 주문</div>
                </div>
            </header>
        </>
    );
};

export default Book;