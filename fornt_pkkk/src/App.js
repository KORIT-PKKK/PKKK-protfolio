import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Visit from './pages/visit/Visit';
import Feed from './pages/feed/Feed';


function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/visit' element={<Visit />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
      </Routes>
    </>
  );
}

export default App;
