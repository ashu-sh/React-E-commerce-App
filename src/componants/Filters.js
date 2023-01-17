import { Button, Form } from "react-bootstrap";


const Filters = () => {
  

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
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Price High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
        
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Products Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}

        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          
        />
      </span>
      <Button
        variant="warning">Clear Filters</Button>
    </div>
  );
};

export default Filters;