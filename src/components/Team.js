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
              subtitle={"Co Founder - Full Stack Software Engineer"}
              email={"lopez4163@gmail.com "}
              github_link={"https://github.com/Lopez4163"}
              image={nico_headshot}
              summary={
                "A skilled Full Stack Software Engineer with expertise in JavaScript, React, and Node.js. Known for building dynamic applications, designing and developing robust APIs and solving complex problems, as seen in projects like MatKings and Niche Nest. Enjoys continuous learning and delivering high-quality code, thriving in fast-paced environments and contributing to impactful solutions."
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
