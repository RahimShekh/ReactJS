import React from 'react'
//Event handling in react
function Card() {
    const data =[{
        name:"Mahiya ve",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit neque vero itaque!"
    },
    {
        name:"Teri Meri",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit neque vero itaque!"
    }
]

    const handleClickDownload = "Song downloading";
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
     {data.map((elem,index)=>(
         <div key={index} className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-sm mt-2'>{elem.description}</p>
        <button onClick={()=>{alert(handleClickDownload)}} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-2'>Download</button>
      </div>
     ))}
    </div>
  )
}

export default Card
