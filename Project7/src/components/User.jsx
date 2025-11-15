import React from 'react'
import {Link, Outlet} from "react-router-dom";

function User() {
  return (
    <div>
      <h1>Hello to user</h1>
      <div className='ml-20 flex w-fit flex-col mt-10 '>
        <Link className='mb-3 py-2 px-4 bg-red-300 text-white  hover:bg-red-400' to="/user/john">john</Link>
        <Link className='mb-3 py-2 px-4 bg-red-300 text-white  hover:bg-red-400'to="/user/ayush">ayush</Link>
        <Link className='mb-3 py-2 px-4 bg-red-300 text-white hover:bg-red-400' to="/user/anwar">Anwar</Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default User
