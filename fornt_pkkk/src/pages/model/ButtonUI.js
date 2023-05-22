/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/ButtonUIStyle';

const ButtonUI = ({ children, onClick }) => {
    return (
        <>
            <div css={S.buttonBox}>
                <button css={S.button} onClick={() => onClick('/postAddView')}>{children}</button>
            </div>
        </>
    );
};

export default ButtonUI;