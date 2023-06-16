import React from "react";
import { Card } from "react-bootstrap"; 
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { yellow } from "material-ui-colors";


const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(prod.id);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Link to={`/Product_Info/${prod.id}`}>
            <Card.Title>{prod.name}</Card.Title>
          </Link>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="contained"style={{backgroundColor: yellow[900]}}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
            variant="contained"style={{backgroundColor: yellow[800]}}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out Of Stock" : "Add To cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
