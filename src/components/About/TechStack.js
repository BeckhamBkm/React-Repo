import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiJava,
  SiPython,
  SiMicrosoftsqlserver,
  SiGit,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
       <Col xs={4} md={2} className="tech-icons">
       <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      
    </Row>
  );
}

export default Techstack;