import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetail() {
    const {name} = useParams();
    const navigate = useNavigate();
    // console.log(d);

    const goBackHandler = () =>{
        navigate("/user");
        //navigate(-1) aisa bhi chalega
    }
  return (
    <div className='flex justify-center mt-30 '>
    <div className=' w-50 h-40 bg-zinc-100  rounded-3xl'>
        <h1>User Detail</h1>
      <h2>{name}</h2>
      <button onClick={goBackHandler} className='bg-blue-400 px-3 py-2 mt-20'>Go Back</button>
    </div>
    </div>
  )
}

export default UserDetail
