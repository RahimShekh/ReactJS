import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-center gap-10 text-sm mb-10'>
    <NavLink className={(e)=> e.isActive ?"text-red-300":""} to="/">
        Home
    </NavLink>
    <NavLink className={(e)=> e.isActive ?"text-red-300":""} to="/recipies">
        recipies
    </NavLink>
    <NavLink className={(e)=> e.isActive ?"text-red-300":""} to="/about">
        About
    </NavLink>
    <NavLink className={(e)=> e.isActive ? "text-red-300":""} to="/create-recipe">
        Create recipe
    </NavLink>
    </div>
  )
}

export default Navbar
