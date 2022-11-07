import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  function addZero(hour)
  {
    if(hour < 10)
    {
      hour = "0" + hour;
    }
    return hour;
  }
  let time = addZero(hour) +':'+minute;
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Bokang Modise</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} {time} </h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;