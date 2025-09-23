import React from 'react'
//conditional rendering
function Card() {
  const data = [{
    image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww",
    name:"Amazon Basics",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt debitis. Recusandae?",
     instock:true
  },
  {
    image:"https://images.unsplash.com/photo-1755366282248-ebe47a7b33b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    name:"Daily Objects",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt debitis. Recusandae?",
    instock:false

  },
  {
    image:"https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
    name:"Apple",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt debitis. Recusandae?",
    instock:false
  }
]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
      {data.map((elem,index) =>(
        <div key = {index} className='w-52 bg-zinc-100 overflow-hidden rounded-md'>
        <div className='w-full h-32 bg-zinc-300'>
          <img 
            className='w-full h-full object-cover'
            src={elem.image} 
            alt="" 
          />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.name}</h2>
          <p className='text-xs mt-3'>{elem.description}</p>
          <button className={`px-3 py-2 ${elem.instock ? " bg-sky-400" : "bg-red-400"} rounded-md mt-5 text-xs'`}>
            {elem.instock ? "In Stock" : "Out of Stock"}</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card

//key = {index} for removing the warning from console in browser