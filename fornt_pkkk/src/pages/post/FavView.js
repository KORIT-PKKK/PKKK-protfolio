import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RequestLoginUI from './model/RequestLoginUI';

const FavView = () => {
    const navigate = useNavigate();

    const menuClickHandle = (path) => {
        navigate(path);
    }

    const rtk = Cookies.get("refreshToken");
    const authState = rtk !== undefined;

    return (
        <>
            <div></div>
            {authState ? "" : (<RequestLoginUI onClick={menuClickHandle} />)}
        </>
    );
};

export default FavView;