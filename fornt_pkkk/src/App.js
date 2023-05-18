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
import GooglePlace from './pages/google/googlePlace/GooglePlace';
import SignInRoute from './components/auth/SignInRoute';
function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/auth/login' element={<SignInRoute path={'/auth/login'} element={<LoginView />}/>}/>
        <Route path='/auth/register'element={<SignInRoute path={'/auth/register'} element={<RegisterView />}/>}/>
        <Route path='/*' element={<SignInRoute path={'/*'} element={<MainView/>}/>}/>
        <Route path='/userSetting' element={<SignInRoute path={'/userSetting'}element={<UserSettingView />}/>}/>
        <Route path='/userUpdate' element={<SignInRoute path={'/userUpdate'}element={<UserUpdateView />}/>}/>
        <Route path='/follow/*' element={<SignInRoute path={'/follow/*'}element={<FollowHome />}/>}/>
        <Route path='/postWriting' element={<SignInRoute path={'/postWriting'}element={<PostWriting />}/>}/>
        <Route path='/place' element={<SignInRoute path={'/place'}element={<GooglePlace />}/>}/>
      </Routes>
    </>
  );
}

export default App;
