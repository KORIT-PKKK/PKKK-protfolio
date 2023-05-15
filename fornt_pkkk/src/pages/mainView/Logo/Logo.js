/** @jsxImportSource @emotion/react */
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import * as S from './style/LogoStyle';

const Logo = () => {
    return (
        <>
            <div css={S.logoBox}>
                <div>
                    <button css={S.logo}><HiHome /></button>
                    <button css={S.pageName}>PKKK플레이스</button>
                </div>
                <div>
                    <button css={S.menuButton}><BiMenu/></button>
                </div>
            </div>
        </>
    );
};

export default Logo;