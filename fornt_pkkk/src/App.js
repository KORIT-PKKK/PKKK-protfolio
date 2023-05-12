import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auths/login/Login';
import UserOutLine from './pages/users/userOutLine/UserOutLine';




function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/userOutLine' element={<UserOutLine/>} />
      </Routes>
    </>
  );
}

export default App;
