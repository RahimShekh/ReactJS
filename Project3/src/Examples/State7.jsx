import React, { useState } from 'react'

function State7() {
    const[val,setVal] = useState([1,2,3,4,5,6,7,8])
  return (
    <div className='p-40'>
        {val.map((elem)=> <h1>{elem}</h1>)}
        <button  onClick={()=>setVal(()=>val.map((elem)=> elem+1 ))}
        className= {`bg-green-400 text-white px-3 py-2 rounded-2xl mt-4`}>increase</button>
        <br />
        <button onClick={()=>setVal(()=>val.map((elem)=> elem-1 ))}
        className= {`bg-red-400 text-white px-3 py-2 rounded-2xl mt-4`}>Descrease</button>
    </div>
  )
}

export default State7