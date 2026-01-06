import React from 'react'
import { useState, useEffect } from 'react';
function Product() {
  const[product,setProduct]=useState([]);
  const getProduct= async ()=>{
    let res= await fetch('https://dummyjson.com/products')
    res= await res.json();
    console.log(res.products);
    setProduct(res.products);
  }
  useEffect(()=>{
    getProduct();
  }, []);
  return (
    <div>
      {product?.length > 0 ? (
        <div className='if_parent flex flex-wrap justify-center bg-blue-100 flex-col-4 mb-10'>
          {
            product.map((item)=>{
              return (
                <div key={item.id} className='box border shadow-2xl rounded-4xl m-5 bg-blue-50 flex flex-col justify-center items-center'>
                  <img src={item.thumbnail} alt="thumbnail"/>
                  <h1 className='mt-5 font-semibold text-xl'>{item.title}</h1>
                  <p className='mb-5'>Rs.{item.price}</p>
                  </div>
              )
            })
          }
        </div>):(
        <div className='else'>Loading....... </div>
        )}
    </div>
  )
}

export default Product
