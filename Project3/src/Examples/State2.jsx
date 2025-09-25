import React, { useState } from 'react'

function State2() {
    const [val,setVal] = useState({name:"Rahim",branch: true})
  return (
    <div>
      <h1>name : {val.name}</h1>
      <h1>Branch : {val.branch.toString()}</h1>
      <button onClick={()=>(setVal({...val,branch: !val.branch}))} 
      className={`${val.branch ? "bg-red-400" : "bg-blue-500"} text-xs py-3 px-3 rounded-full mt-5 text-white`}>Change</button>
    </div>
  )
}

export default State2
