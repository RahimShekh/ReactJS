import React, { useState } from 'react'

function State() {
    const [val,setVal] = useState(12)

    return (
    <div className='p-12'>
      <h1>{val}</h1>
      <button onClick={()=>setVal((prev)=>prev+1)} className='px-3 py-1 bg-blue-400 rounded-full mt-5'>
        Change karo</button>
    </div>
  )
}

export default State
