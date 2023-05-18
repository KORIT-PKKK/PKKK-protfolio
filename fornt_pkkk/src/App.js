import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import MainView from './pages/MainView';
import UserSettingView from './pages/user/UserSettingView';
import UserUpdateView from './pages/user/UserUpdateView';
import FollowHome from './pages/user/FollowHome';
import GooglePlace from './pages/google/GooglePlace';
import LoginView from './pages/auths/LoginView';
import RegisterView from './pages/auths/RegisterView';
import PostWriting from './pages/postView/postwriting/PostWriting';

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
        <Route path='/follow/*' element={<FollowHome />} />
        <Route path='/postWriting' element={<PostWriting />} />
        <Route path='/place' element={<GooglePlace />} />
      </Routes>
    </>
  );
}

export default App;
