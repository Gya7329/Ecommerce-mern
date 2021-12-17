import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../components/image.svg";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <div className="div_img">
          <img src={img} className="login_image" />
        </div>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </div>
    </Container>
  );
};

export default FormContainer;
