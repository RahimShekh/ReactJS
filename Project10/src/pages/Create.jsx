import React from 'react'
import { useForm } from "react-hook-form";

function Create() {
  const {register,handleSubmit} = useForm();
  return (
    <form action="">
      <input className='block border-b outline-0 p-2' 
      {...register("image")}
       type="url" 
       placeholder='Enter img url' />

      <small className='text-red-400'>
        This is how the error is shown
      </small>

      <input className='block border-b outline-0 p-2' 
      {...register("title")}
       type="text" 
       placeholder='recipe title' />

      <small className='text-red-400'>
        This is how the error is shown
      </small>

      <textarea className='block border-b outline-0 p-2' 
      {...register("ingredients")}
       
       placeholder='write ingredients' />

      <textarea className='block border-b outline-0 p-2' 
      {...register("description")}
       type="text" 
       placeholder='write description' />  

       
      <textarea className='block border-b outline-0 p-2' 
      {...register("instruction")}
       type="text" 
       placeholder='write instruction' />  

        <select className='block border-b outline-0 p-2'
        {...register("instruction")}
        type="text" 
        placeholder='write instruction'>
        <option className='text-black' value="">Category 1</option>
        <option value="">Category 2</option>
        <option value="">Category 3</option>
        </select>

       <button className='mt-10 px-3 py-2 bg-gray-950 rounded-md'>
        Save Recipe
        </button>   
    </form>
  )
}

export default Create
