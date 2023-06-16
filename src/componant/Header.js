import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar style={{ backgroundColor: "#000", height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image
              style={{ width: "118px", height: "58px" }}
              src="https://publishingperspectives.com/wp-content/uploads/2016/02/Amazon-Logo-featured.jpg"
            ></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            style={{ width: 500 }}
            placeholder="search a product"
            onChange={(e) => {
              productDispatch({
                type: "SORT_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown variant="Dark">
              <Link to="/cart">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge
                  bg="none"
                  style={{
                    borderRadius: "15px",
                    border: "solid #e67300",
                    margin: "10px",
                  }}
                >
                  {cart.length}
                </Badge>
              </Link>
            </Dropdown>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
