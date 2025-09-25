import React, { useState } from 'react'

function State4() {
  const [val,setVal] = useState([1,2,3,4,5,6]);
  return (
    <div className='px-4'>
        {val.map((value) => <h1>{value}</h1>)}
        <button onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length-1))} 
        className='bg-amber-700 text-white px-3 py-2 mt-5 rounded-full'>Remove</button>
    </div>
  )
}

export default State4
