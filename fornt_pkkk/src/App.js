import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import UserOutLine from './pages/users/userOutLine/UserOutLine';
import MainView from './pages/mainView/MainView';
import LoginView from './pages/auths/loginView/LoginView'
import Place from './pages/google/googlePlace/GooglePlace';




function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/userOutLine' element={<UserOutLine/>}/>
        <Route path='/' element={<MainView/>}/>
        <Route path='/place' element={<Place/>}/>
      </Routes>
    </>
  );
}

export default App;
