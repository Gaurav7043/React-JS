import React, { useId } from 'react'
import data from "../../product.json"
import Card_Com from './Card_Com'

export default function Props_pro_1() {
  // console.log("data:", data)
  return (
    <div className='d-flex flex-wrap gap-2 m-4 p-3' style={{background : "lightgray"}}>
      {
        data.map((e)=>{
          let id = useId()
          // with object
          // return <Card_Com key={id} data={e}/>

          // without object
          // return <Card_Com key={id} name={e.title} price={e.price} discription={e.description}/>

          // with discount
          return <Card_Com key={id} name={e.title} price={e.price} discription={e.description} discountPercentage={e.discountPercentage} after={e.price - e.discountPercentage}/>
        })
      }
      
    </div>
  )
}
