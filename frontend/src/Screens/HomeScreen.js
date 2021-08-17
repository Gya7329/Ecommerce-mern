import React ,{useState,useEffect}from "react";
import { Row, Col } from "react-bootstrap";
import Product from '../Components/Product'

import axios from 'axios'
function HomeScreen() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
  // const res =   axios.get('/api/products').then()

const fetchProducts=async()=>{ 
const {data}= await axios.get("api/products")
 setProducts(data)

}
fetchProducts();
  },[])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key ={product._id}sm={12} md={6} lg={4} xl={3}>
            {/* <h3> {product.name} </h3> */}
         <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
