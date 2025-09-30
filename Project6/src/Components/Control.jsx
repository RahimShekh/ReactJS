//controlled components

import React from 'react'
import { useState } from 'react'

function Control() {

  const [val,setVal] =  useState({name:"",email:""}) // khali object dena hoga

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(val);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={(event)=>setVal(...val,{name:event.target.value})} type="text"placeholder='name' />
        <input onChange={(event)=>setVal(...val,{email:event.target.value})} type="text"placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

//event.target.value  = target hai voh input meka target lega value input meki value
export default Control
