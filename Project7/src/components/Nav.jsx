import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className='mt-10 flex justify-evenly gap-3'>

        <NavLink to="/">
            {(e)=>{
                // console.log(e)
                return <span className={[
                    e.isActive ? "text-blue-400" : "",
                    e.isActive ? "underline" : ""
                ].join(" ")} >Home</span>
                
            }}
        </NavLink>
      <NavLink style={(e)=>{
        return{color: e.isActive ? "red" : ""}
        // console.log(e);
      }} to= "/">Home</NavLink>
      <NavLink className={({isActive})=> `bg-amber-300 px-2 py-3 text-white rounded-md ${
        isActive ? "bg-blue-400" : ""
      }`} to= "/user">User</NavLink>
      <NavLink className={(e)=>{
        return[
            e.isActive ? "text-red-200" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ");
        // console.log(e);
      }} to= "/about">About</NavLink>
    </nav>
    </>
  )
}

export default Nav
