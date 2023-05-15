/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style/ButtonStyle';

const Button = ({ children }) => {
    return (
        <>
            <div css={S.writingBox}>
                    <button css={S.writingButton}>{children}</button>
            </div>
        </>
    );
};

export default Button;