import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import MainView from './pages/mainView/MainView';
import LoginView from './pages/auths/loginView/LoginView'
import PostWriting from './pages/postView/postwriting/PostWriting';
import FollowHome from './pages/users/follows/followHome/FollowHome';
import UserUpdateView from './pages/users/userUpdate/UserUpdateView';
import UserSettingView from './pages/users/userSetting/UserSettingView';
import RegisterView from './pages/auths/registerView/RegisterView';
function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/register' element={<RegisterView />}/>
        <Route path='/*' element={<MainView/>}/>
        <Route path='/userSetting' element={<UserSettingView />}/>
        <Route path='/userUpdate' element={<UserUpdateView />}/>
        <Route path='/follow' element={<FollowHome />}/>
        <Route path='/postWriting' element={<PostWriting />}/>
      </Routes>
    </>
  );
}

export default App;
