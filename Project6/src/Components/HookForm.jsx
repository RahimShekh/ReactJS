//useForm is better to handle forms

import React from 'react'
import { useForm } from "react-hook-form";

function HookForm() {
    const {register,handleSubmit} = useForm()
    //console.log(register());
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register("name")} type="text" placeholder='name' />
        <input {...register("email")} type="text" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default HookForm

//register method contanis three things in it onblure,onchange,ref 