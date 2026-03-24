import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Linh Nguyen</span> from{" "}
            <span className="purple">Nghe An, Vietnam</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">
              Junior Business Operations & Brand Support
            </span>{" "}
            professional at{" "}
            <span className="purple">Interdist (P&G partner).</span>.
            <br />I am pursuing a Bachelor’s degree in{" "}
            <span className="purple">
              International Business at Dong A University
            </span>{" "}
            maintaining a GPA of <span className="purple">3.0/4.0.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyzing Market Trends 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Logistics & Supply Chain
              Workshops 🚢
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering and Community Service 🤝
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create value that moves the world forward!"
          </p>
          <footer className="blockquote-footer">Linh Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
