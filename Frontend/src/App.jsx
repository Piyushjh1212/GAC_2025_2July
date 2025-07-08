import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Component/Home'
import Header from './Component/Header';
import Login from './Component/Login';
import Checkout from './Component/Checkout';


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Login" element = {<Login/>}/>

        <Route path ="/Course-Checkout" element={<Checkout/>} />
         
      </Routes>
    </Router>
  )
}
