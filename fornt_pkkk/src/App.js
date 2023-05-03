import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
