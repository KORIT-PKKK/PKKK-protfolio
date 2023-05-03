/** @jsxImportSource @emotion/react */
import * as S from './style/HomeStyle';
import React from 'react';
import { HiHome } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';

const Home = () => {
    return (
        <>
           <header css={S.headerStyle}>
                <div>
                    <button css={S.icon}><HiHome /></button>
                    <button css={S.logo}>PKKK플레이스</button>
                </div>
                <div>
                    <button css={S.menu}><BiMenu/></button>
                </div>
           </header>
           <main>
                <div css={S.userInfo}>
                    
                </div>
           </main>
           <footer>

           </footer>
        </>
    );
};

export default Home;