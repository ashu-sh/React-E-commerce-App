import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context'


const SingleProduct = ({prod}) => {

  const {state:{cart},dispatch,} = CartState()

  return <div className='products'>
    <Card>
        <Card.Img variant='top'src={prod.image} alt={prod.name}/>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}><span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery?(<div>Fast Delivery</div>):(<div>4 Days Delivery</div>)}
            </Card.Subtitle>
            {
                cart.some((p)=>p.id===prod.id)?(
                <Button onClick={()=>{
                    dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod
                    })
                }} variant='danger'>Remove From Cart</Button>
                ):(
                    <Button variant='warning' onClick={()=>{
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:prod
                        })}
                    } disabled={!prod.inStock}>{!prod.inStock?"Out Of Stock": "Add To cart"}</Button>
                )
            }
        </Card.Body>
    </Card>
  </div>
}

export default SingleProduct