import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
    const [val,setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden'>
        <img 
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform delay-500 w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1758132123976-6730692335f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" 
          alt="" 
        />
        <img 
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform delay-500 w-full h-full object-cover`} 
          src="https://plus.unsplash.com/premium_photo-1758360086631-9565ac269436?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" 
          alt="" 
        />
        {/* Arrow Button */}
        <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#dadada7b] rounded-full'>
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  )
}

export default Card
