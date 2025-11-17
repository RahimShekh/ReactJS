import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { userContext } from '../context/Context'


function User() {
  const {users,setUsers} = useContext(userContext);
  // console.log(x);
  return (
    <div>
      <h1 className='text-3xl py-3'>User List</h1>
      <div className='bg-blue-300 flex mt-10 w-fit px-3 py-2'>
        {users.map((elem) =>(<Link key={elem.id} className='mr-50' to={`/user/${elem.id}`} >{elem.username}</Link>))}
        
      </div>
    </div>
  )
}

export default User
