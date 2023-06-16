import React from 'react'
import { CartState } from '../Context/Context'
import Product_info from "./Product_info"
function Product_Page() {


  const{state:{products}} = CartState()
  return (
    <div className='Product_Page'>
      {
        products.map((value)=>{
          return <Product_info value={value} key={value.id}/>
        })
      }
    </div>
  )
}

export default Product_Page