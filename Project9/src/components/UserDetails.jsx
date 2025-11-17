import React, { useContext } from 'react'
import { userContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
  const navigate = useNavigate();
  const {id} = useParams(); // gets a route id
  const {users } = useContext(userContext);
  // console.log(users[id]);
  
  return (
    <div>
      <h1 className='text-4xl text-black-200'>{users[id].username}</h1>
      <h1>{users[id].city}</h1>

      <button onClick={()=> navigate(-1)} className='bg-gray-400 px-3 py-2 w-fit'>go back</button>
    </div>
  )
}

export default UserDetails
