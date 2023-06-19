import './App.css';
import Landing from './pages/Landing';
import New from './pages/New';
import Edit from './pages/Edit';
import { Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {


  return (
    <div className="App bg-slate-800 p-20 h-screen">
      <h1 className='text-5xl bold underline my-10'>Favorite Authors</h1>
      <Routes>
        <Route element={<Landing />} path='/' />
        <Route element={<New />} path='/new' />
        <Route element={<Edit />} path='edit/:id' />
      </Routes>
    </div>
  );
}

export default App;
