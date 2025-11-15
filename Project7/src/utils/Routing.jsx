import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import User from '../components/User'
import Home from '../components/Home'
import UserDetail from '../components/UserDetail'

function Routing() {
  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/user" element={<User/>} />
      <Route path="/user/:name" element={<UserDetail/>} /> // dynamic */}

      <Route path='/user' element={<User/>} >
      <Route path="/user/:name" element={<UserDetail/>} /> // uske niche dikhega
      </Route>

      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default Routing
