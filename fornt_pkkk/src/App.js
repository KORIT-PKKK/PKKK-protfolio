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


function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/visit' element={<Visit />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/save' element={<Save />}></Route>
        <Route path='/book' element={<Book />}></Route>
      </Routes>
    </>
  );
}

export default App;
