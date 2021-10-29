import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      {/* <Container className="footer_bar">
        <Row>
          <Col className="text-center py-3">Copyright &copy; ComfyHouse</Col>
        </Row>
      </Container> */}
      <div className="footer_bar">
        <Row style={{ margin: "0" }}>
          <Col className="text-center py-3">Copyright &copy; ComfyHouse</Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
