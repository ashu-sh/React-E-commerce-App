import React from 'react'
import { CartState } from '../Context/Context'
import { Form, ListGroup,Col,Row,Image } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from '@mui/material'
import { yellow } from '@mui/material/colors'

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
          {cart.length>0?(
            <>
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
          </> 
          ):( <span class="Cart" style={{ padding: 20,fontSize:"40px" }}><img style={{width:"150px",minWidth:"60px"}} src="https://img.icons8.com/3d-fluency/94/null/shopping-cart.png"/><h2>Cart is Empty !</h2></span>) 
          }
          </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Total ({cart.length}) items in cart</span>
        <span style={{fontWeight:700,fontSize:20}}>Total Amount: ₹ {total}</span>
        <Button type='button' variant="contained"style={{backgroundColor: yellow[800]}} disabled={cart.length===0}>Place The Order</Button>
      </div>
    </div>
  )
}

export default Cart