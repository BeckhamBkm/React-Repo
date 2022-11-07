import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Bokang Modise </span>
            from <span className="purple"> Zeerust, Northwest</span>
            <br />I am <span className="purple"> a student and a Programmer.</span>
            <br />I would like to join SovTech because of it's multidimensions,
            in Building designing and deploying mobile and web application and I believe it would be 
            a great learning experince for me to gain extra knowledge.
            <br />
            <br />
            I have skills in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Java, C# , Databases
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Structures, Networks
              </li>
            <li className="about-activity">
              <ImPointRight /> SQL and Flutter mobile
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;