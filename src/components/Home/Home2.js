import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Linh.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Linh, currently a third-year student majoring in
              International Business. I am writing to express my interest in the
              Import-Export Sales Staff position at your company.
              <br />
              <br />
              With a strong interest in international trade and logistics, I
              have been actively developing my knowledge and skills related to
              import-export operations, market research, and business
              communication. Through my academic studies as well as my
              internship and part-time experiences, I have gained practical
              exposure to working in a business environment, supporting sales
              activities, and understanding customer needs.
              <br />
              <br />
              In addition to my technical knowledge, I bring the following
              skills and experiences: I am particularly confident in my
              communication skills in English, my ability to learn quickly, and
              my proactive working attitude. I have experience supporting
              business operations, collecting market data, and collaborating
              effectively in team environments. Additionally, I am eager to
              further develop my skills in international business, especially in
              import-export procedures and working with foreign partners.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
