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
                "John Doe is a seasoned Full Stack Engineer with over 10 years of experience in web development. He excels in creating scalable, high-performance applications using a wide range of technologies, including React, Node.js, and MongoDB. John is passionate about coding best practices and enjoys mentoring junior developers to help them achieve their potential."
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
                "A versatile Full Stack Engineer with hands-on experience in JavaScript, React, and Node.js. Over the years, has developed a keen ability to build dynamic applications and solve complex problems, exemplified by work on projects like MatKings and Niche Nest. Thrives in fast-paced environments where continuous learning and innovation are key, and takes pride in delivering high-quality code and impactful solutions. With a solid background in both technical development and team leadership, is dedicated to growing as a developer and contributing to cutting-edge projects."
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
