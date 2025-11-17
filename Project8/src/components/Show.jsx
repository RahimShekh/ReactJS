import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from './utils/Axios';

function Show() {
  const [product,setProducts] = useState([]);

  const getProducts = () =>{
    const api = "https://fakestoreapi.com/products";
    axios.get(api)
    .then(data => {
      console.log(data)
      setProducts(data.data);
    })
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <>
    {/* <button onClick={getProducts} className='px-4 py-3 bg-red-300 mt-5'>Call API</button> */}
      
      <ul>
        {product.length > 0 ? product.map(elem =><li key={elem.id} className='mb-2 rounded w-70 px-1 py-10 bg-gray-300'>
        {elem.title}</li>)  : <h1>loading...</h1>  }

      </ul>
    </>
  )
}

export default Show
