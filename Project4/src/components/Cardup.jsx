import React, { useState } from 'react'
import { HiArrowRight } from "react-icons/hi";

function Cardup() {
  const [val, setVal] = useState(false);

  return (
    <div className='bg-zinc-200 w-full h-screen flex justify-center items-center'>

      <div className='w-70 h-40 relative overflow-hidden'>

        {/* IMAGE 1 */}
        <img 
          className={`
            ${val ? "-translate-y-[100%]" : "translate-y-[0%]"}
            transition-transform duration-300 w-full h-full object-cover rounded-md absolute top-0 left-0
          `}
          src="https://images.unsplash.com/photo-1765307639918-a99f7f3d9f75?q=80&w=1175&auto=format&fit=crop"
        />

        {/* IMAGE 2 */}
        <img 
          className={`
            ${val ? "translate-y-[0%]" : "translate-y-[100%]"}
            transition-transform duration-300 w-full h-full object-cover rounded-md absolute top-0 left-0
          `}
          src="https://images.unsplash.com/photo-1765201500503-8f579c2bda19?w=600&auto=format&fit=crop&q=60"
        />

        {/* BUTTON */}
        <span
          onClick={() => setVal(!val)}
          className='bg-neutral-300 w-10 h-10 absolute left-1/2 -translate-x-1/2 bottom-4 rounded-full flex justify-center items-center cursor-pointer'
        >
          <HiArrowRight />
        </span>

      </div>
    </div>
  )
}

export default Cardup
