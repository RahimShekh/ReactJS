import React from 'react'
import { useRef } from 'react';

function UseRef() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event)=>{
    event.preventDefault();  // is func ki wajah se page reload nhi hoga
    console.log(name.current.value,age.current.value,email.current.value);  // actual value milegi 
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input ref={name} placeholder='name' type="text" />
      <input ref={age} placeholder='age' type="text" />
       <input ref={email} placeholder='email' type="text" />

      <input type="submit" />
    </form>
  )
}

export default UseRef
