import { Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { yellow } from "@mui/material/colors";
import { Button } from "@mui/material";

const Filters = () => {
  const {
    productState: { byStock, byFastdelivery, sort },
    productDispatch,
    serachQuery,
  } = CartState();

  console.log(byStock, byFastdelivery, sort);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Price Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Price High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Products Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_DELIVERY",
            })
          }
          checked={byFastdelivery}
        />
      </span>
      <Button
        variant="contained"style={{backgroundColor: yellow[800]}}
        onClick={() => {
          productDispatch({
            type: "CLEAR_FILTER",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
