import React, { useState } from 'react'
import Home from './components/Home'
import {Link,Route,Routes} from "react-router-dom";
import User from './components/User';
import About from './components/About';
import UserDetails from './components/UserDetails';

function App() {
 
  return (
    <div className='bg-amber-300 content-center' >
      <nav className='mt-10 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserDetails/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App


/*
 const [user,setUser] = useState([{
    id : 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "sdrerfdf"
  },{
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2514",
    password: "skjelfo"
  }])
*/