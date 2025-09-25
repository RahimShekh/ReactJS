import React, { useState } from 'react'

function State5() {
    const[val,setVal] = useState([1,2,3,4,5,6]);
  return (
    <div className='px-5'>
      {val.map((item)=><h1>{item}</h1>)}
      <button onClick={()=>
        setVal(val.filter((item,index) => index!=3))}
        className='bg-blue-500 text-white px-3 py-2 rounded-full mt-5'>Remove</button>
    </div>
  )
}

export default State5
