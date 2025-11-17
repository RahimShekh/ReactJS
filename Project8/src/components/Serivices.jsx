import axios from './utils/Axios';
import React, { useEffect, useState } from 'react'

function Serivices() {
    const[first,setFirst] =  useState("this is normal data");
    const[second,setSec] = useState("this is large data")

    const getUsers = ()=>{
        const api = "https://fakestoreapi.com/users"
        //const api = "/users"  bcuz of baseURL

        axios.get(api)
        .then((users)=>{
            console.log(users);
        })
        .catch((err)=> console.log(err));
    }
    useEffect(()=>{
        console.log("Service component is created");
        return ()=>{
            console.log("Service Component deleted");
        }
    },[second]) // if we dont use the [] then the whole componenet will re-render, [] conrols the re-render(updation)
    //agr tu chata ha ki koi re render ho tab use array mi likh
  return (
    <div>
      <h1 >{first}</h1>
      <button onClick={()=> setFirst("normal data changed")} className='bg-amber-200 px-3 py-2 mb-5'>change normal data</button>

      <h1>{second}</h1>
      <button onClick={()=> setSec("large data changed")} className='bg-amber-200 px-3 py-2'>change large data</button>
    </div>
  )
}

export default Serivices
