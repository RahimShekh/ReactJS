import React, { useState } from 'react'

function State6() {
    const[val,setVal] = useState([1,2,3,4,5,6]);

    function addValue()
    {
        setVal([...val,val.length+1])
    }
    function removeValue()
    {
        const newArr = [...val];
        newArr.pop();
        setVal(newArr);  // or u can use filter also
    }
  return (
    <div className='px-5'>
      {val.map((item)=><h1>{item}</h1>)}
      <button onClick={addValue}
        className='bg-blue-500 text-white px-3 py-2 rounded-full mt-5'>Add</button>
        <button onClick={removeValue}
        className='bg-blue-500 text-white px-3 py-2 rounded-full ml-5'>Remove</button>
    </div>
  )
}

export default State6
