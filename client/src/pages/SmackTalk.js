import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import Chat from "../pages/chat";

const SmackTalk = () => (
  <div>
    <Navbar1 />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>SmackTalk</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

           <Chat/>
          
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default SmackTalk;