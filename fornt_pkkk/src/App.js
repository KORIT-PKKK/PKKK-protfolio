import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import MainView from './pages/mainView/MainView';
import LoginView from './pages/auths/loginView/LoginView'
import RegisterView from './pages/auths/registerView/RegisterView';
import UserSetting from './pages/users/userSetting/UserSettingView';
import UserUpdate from './pages/users/userUpdate/UserUpdateView';
import FollowHome from './pages/users/follows/followHome/FollowHome';




function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/register' element={<RegisterView/>}/>
        <Route path='/*' element={<MainView/>}/>
        <Route path='/userSetting' element={<UserSetting/>}/>
        <Route path='/userUpdate' element={<UserUpdate/>}/>
        <Route path='/follow' element={<FollowHome/>}/>
      </Routes>
    </>
  );
}

export default App;
