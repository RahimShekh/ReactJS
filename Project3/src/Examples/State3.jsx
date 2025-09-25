import React, { useState } from 'react'

function State3() {
    const [val, setVal] = useState({name:"rahim",age:24});
  return (
    <div>
        <button onClick={()=>setVal(
        {...val,gender:"male"})}>Click</button>
    </div>
  )
}

export default State3

//use state state ko turant update nhi karta wo use state ko apne
//hisab se fun complete karta too fix performance issue

//console.log karega toh nhi dikhega lekin browser mein component mein addd hoga