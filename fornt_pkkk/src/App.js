import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import MainView from './pages/MainView';
import UserSettingView from './pages/user/UserSettingView';
import UserUpdateView from './pages/user/UserUpdateView';
import GooglePlace from './pages/google/GooglePlace';
import LoginView from './pages/auths/LoginView';
import RegisterView from './pages/auths/RegisterView';
import FollowView from './pages/user/FollowView';
import PostAddView from './pages/post/PostAddView';

function App() {
  return (
    <>
      <Global styles={Reset}></Global>
      <Routes>
        <Route path='/auth/login' element={<LoginView />} />
        <Route path='/auth/register' element={<RegisterView />} />
        <Route path='/*' element={<MainView />} />
        <Route path='/userSetting' element={<UserSettingView />} />
        <Route path='/userUpdate' element={<UserUpdateView />} />
        <Route path='/follow/*' element={<FollowView />} />
        <Route path='/postWriting' element={<PostAddView />} />
        <Route path='/place' element={<GooglePlace />} />
      </Routes>
    </>
  );
}

export default App;
