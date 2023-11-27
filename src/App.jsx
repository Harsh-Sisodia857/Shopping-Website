import React from 'react';
import Navbar from './component/Navbar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Cart from './component/pages/Cart';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element = {<Home/>} />
         <Route path="/cart" element = {<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
