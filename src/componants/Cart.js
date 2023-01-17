import React from 'react'
import { CartState } from '../Context/Context'
import { Button, Form, ListGroup,Col,Row,Image } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
const Cart = () => {

  const {state:{cart},dispatch} = CartState()

  const [total, setTotal] = useState()
  useEffect(() => {
    setTotal(cart.reduce((acc,current)=> acc+Number(current.price)*current.qty,0))
  }, [cart])
  
  
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map((prod)=>(
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded></Image>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>₹ {prod.price.split(".")[0]}</Col>
                  <Col md={2}>
                    <Form.Control as="select"value={prod.qty} 
                       onChange={(e)=>
                        dispatch({
                          type:"CHANGE_QTY",
                          payload:{
                            id:prod.id,
                            qty:e.target.value
                          }
                        })
                      }
                       >{[
                      ...Array(prod.inStock).keys()].map((x)=>(
                        <option key={x+1}>{x+1}</option>
                      ))
                    }</Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button'
                    variant='light'
                    onClick={()=>
                    dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:prod
                    })
                    }><AiFillDelete fontSize="20px"/></Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Total ({cart.length}) Items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total Amount: ₹ {total}</span>
        <Button type='button' variant='warning' disabled={cart.length===0}>Place The Order</Button>
      </div>
    </div>
  )
}

export default Cart