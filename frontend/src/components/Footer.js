import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (


    <div style={{ backgroundColor:"#2c3a47"}}>

      <Row>
        <Col  style={{padding:"20px",display:"flex",justifyContent:"space-evenly",fontSize:"30px",flexDirection:"row",cursor:"pointer",color:"#ffffff"}}>

        <a href="https://www.facebook.com/gya11"/>
          <i class="fab fa-facebook-square"></i>
          <a href="https://www.instagram.com/gdansari01"/>
          <i class="fab fa-instagram"></i>
          <a href="https://www.twitter.com/"/>
          <i class="fab fa-twitter-square"></i>
          <a href="https://www.linkedin.com/"/>
          <i class="fab fa-linkedin"></i>

         </Col>

        <Col style={{padding:"20px",display:"flex", justifyContent:"space-between",fontSize:"16px",color:"#fff"}}>

        <a href="#">About Us</a>
        <a href="#"> | Contact Us |</a>
        <a href="#">  Privacy Policy |</a>
        <a href="#">Terms of Us</a>


        </Col>
        <Col style={{margin:"10px",display:"flex",fontSize:"16px" ,color:"#ffffff"}}>

<p>Addres : 12/22 IT Building , Shahberi,Greater Noida</p>
<Col>

 <p>Phone: +91-99999-9999</p>
  <p > <a href="mailto:ansari@gyasuddin.tech">
  Email: customercare@comfy.com  </a> </p>
</Col>
</Col>
      </Row>
    </div>

  );
};

export default Footer;
