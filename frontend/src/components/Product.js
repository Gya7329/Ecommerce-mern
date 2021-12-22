import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
  <Card className="my-3 p-3 rounded" id="cardItem">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text
          as="h2"
          style={{
            color: "#28313B",
            // fontSize: "1.3rem",
            // fontFamily: `"Acme", sans-serif`,
          }}
        >
          <i class="uil uil-rupee-sign rupee-icon"></i>
          <label className="rupee">{product.price}</label>
          {/* <i class="fas fa-rupee-sign rupee">{product.price}</i> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
