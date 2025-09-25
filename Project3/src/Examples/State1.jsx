import React, { useState } from 'react'

function State1() {
    const [val,setVal] = useState({name:"Rahim",branch:true})
  return (
    <div>
       <h1>name : {val.name}</h1>
       <h1>Branch : {val.branch.toString()} </h1>
       <button onClick={()=>setVal({...val,branch: !val.branch})} 
       className='bg-amber-400 text-white mt-5 rounded-md text-xs px-3 py-2'>
        Change</button>
    </div>
  )
}

export default State1
