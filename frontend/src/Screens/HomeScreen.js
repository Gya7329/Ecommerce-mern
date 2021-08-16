import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from '../Components/Product'
import products from "../products";
function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3> {product.name} </h3> */}
         <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
