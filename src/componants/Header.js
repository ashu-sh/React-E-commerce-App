import { Badge, Container, Dropdown, FormControl, Navbar,Nav, Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import {AiFillDelete} from 'react-icons/ai'
function Header() {

  
  const {state:{cart},dispatch} = CartState()
 

  return (
    <Navbar bg='dark'variant='dark' style={{height:"80px"}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">AMAZON</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl className='m-auto' style={{width:500}} placeholder='search a product'></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant='success'><FaShoppingCart color='white'fontSize="25px"/><Badge bg='success'>{cart.length}</Badge></Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth:370 }}>

              {
                cart.length>0?(
                  <>
                  {cart.map((prod)=>(
                    <span className='cartitem' key={prod.id}>
                      <img src={prod.image} className='cartItemImg'alt={prod.name}/>
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>{prod.price.split(".")[0]}</span>
                      </div>

                      <AiFillDelete 
                      fontSize="20px"
                      style={{cursor:"pointer"}}
                      onClick={()=>

                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:prod
                        })
                      
                      }/>
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width:"95%",margin:"0 10px"}}>Go To Cart</Button>
                  </Link>
                  </>
                ):(<span style={{padding:10}}>Cart is Empty</span>)
              }
              
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header