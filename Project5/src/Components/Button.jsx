import React from 'react'

function Button({text,color}) {
  return (
    
      <button className={` mt-5 px-3 py-2 ${color} text-zinc-100 text-xs rounded mr-10`}>{text}</button>
    
  )
}

export default Button
