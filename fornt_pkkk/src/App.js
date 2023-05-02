import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { Reset } from './styles/Global/reset';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
