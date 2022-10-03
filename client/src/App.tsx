import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={'/page/:currentPage'} element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
