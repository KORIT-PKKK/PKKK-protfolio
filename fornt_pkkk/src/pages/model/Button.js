/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/ButtonStyle';

const Button = ({ children }) => {
    return (
        <>
            <div css={S.buttonBox}>
                <button css={S.button}>{children}</button>
            </div>
        </>
    );
};

export default Button;