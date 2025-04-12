import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EmployeeCard from "./smcomponents/EmployeeCard";
import classes from "./team.module.css";
import nico_headshot from "../assets/nico_headshot.jpg";

const Team = props => {
  return (
    <div className={classes.container} id="team">
      <Container>
        <h1 className={classes.title}>The Team</h1>
        <Row>
          <Col>
            <EmployeeCard
              title={"Fausto Lopez"}
              subtitle={"Founder - Full Stack & Data Engineering"}
              email={"faustolopez110@gmail.com"}
              github_link={"https://github.com/datafaust"}
              image={
                "https://media.licdn.com/dms/image/C4D03AQF4a2FhUX9jdg/profile-displayphoto-shrink_400_400/0/1553571330316?e=1727913600&v=beta&t=9Ywl6Djbp4Mk14dtD-AV8xjynEMxV_0dxd3YMxoFE6s"
              }
              summary={
                "Full Stack Software Engineer with 10+ years of experience specializing in big data applications. Skilled in designing scalable infrastructures, developing APIs, and transforming complex data into actionable insights. Proficient in React, Node.js, SQL and Express, with a proven ability to deliver solutions that drive business growth. Experienced in managing the full software development lifecycle for seamless integration and deployment."
              }
            />
          </Col>
          <Col>
            <EmployeeCard
              title={"Nicholas Lopez"}
              subtitle={"Co Founder - Software Engineer / IT Technician"}
              email={"lopez4163@gmail.com "}
              github_link={"https://github.com/Lopez4163"}
              image={nico_headshot}
              summary={
                "A skilled Software Engineer and IT Technician with a Bachelor's in Computer Systems and AWS Certified Cloud Practitioner credentials. Experienced in building full stack applications using JavaScript, React, and Node.js, while also providing hands-on IT support including Windows-based network setup, file sharing, user account management, and system troubleshooting. Known for delivering reliable solutions in both development and infrastructure, with a passion for learning and problem-solving across the tech stack."
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
