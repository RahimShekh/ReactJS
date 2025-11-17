import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import Show from './components/Show';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Serivices from './components/Serivices';
function App() {
 

//    const AddProducts = () =>{
//     const api = "https://fakestoreapi.com/products";
//     axios.post(api,{
//       "id": 0,
//       "title": "string",
//       "price": 0.1,
//       "description": "string",
//       "category": "string",
//       "image": "http://example.com"
// })  // khali obj mein data bhejo
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//   }
  return (
    <div className='mt-20 ml-20'>
      
      <nav className='flex justify-center gap-10'>
        <Link to="/" >Home</Link>
        <Link to="/show" >show</Link>
        <Link to="/services" >services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/services" element={<Serivices/>} />
      </Routes>
    </div>
  )
}

export default App
