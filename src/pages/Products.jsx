import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
 
  const obj = useParams()
  const [data,setdata]=useState("")
  console.log(obj.id)
  useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${obj.id}`)
      .then((res)=>{
          setdata(res.data)
      })
  },[])
return (
  <div>
      {
          <>
          <h1>{data.title}</h1>
          <img src={data.thumbnail} alt="" />
          </>
      }
  </div>
)
}
  

export default Products
