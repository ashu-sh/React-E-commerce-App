import React from 'react'
import { CartState } from '../Context/Context'
import './design.css'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
const Home = () => {

  const {state:{products}} = CartState()
  
  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {products.map((prod)=>{

          return <SingleProduct prod={prod} key={prod.id}/>
        })}
      </div>
    </div>
  )
}
export default Home