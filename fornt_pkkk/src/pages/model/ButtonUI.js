/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/ButtonUIStyle';

const ButtonUI = ({ children }) => {
    return (
        <>
            <div css={S.buttonBox}>
                <button css={S.button}>{children}</button>
            </div>
        </>
    );
};

export default ButtonUI;