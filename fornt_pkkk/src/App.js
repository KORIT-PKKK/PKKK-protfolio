import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Visit from './pages/visit/Visit';
import Feed from './pages/feed/Feed';
import Review from './pages/review/Review';
import Save from './pages/save/Save';
import Book from './pages/book/Book';
import MyPage from './pages/myPage/MyPage';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Maps from './pages/Maps/Maps';
import Place from './pages/place/Place';
import FollowHome from './pages/follow/followHome/FollowHome';



function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/book' element={<Book />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/maps" element={<Maps/>}></Route>
        <Route path="/place" element={<Place/>}></Route>
        <Route path="/followHome" element={<FollowHome/>}></Route>
      </Routes>
    </>
  );
}

export default App;
