import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`} />
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="div">
         <Rating value={product.rating}
         text={`${product.numReviews} reviews`}
         color='#f8e825'/>
         
        </Card.Text>
<Card.Text as='h5' style={{color:'#29e668'}}><i class="fas fa-rupee-sign">{product.price}</i>

</Card.Text>


      </Card.Body>
    </Card>
  );
}

export default Product;
