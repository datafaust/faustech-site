import React from "react";
import { Row, Image, Container, Col } from "react-bootstrap";

// import rpic from "../assets/rpic.png";
// import shiny from "../assets/shiny.png";
// import sql from "../assets/sql.png";
// import js from "../assets/js2.png";
// import docker from "../assets/docker.png";
// import aws from "../assets/aws.png";

import classes from "./techstatus.module.css";

const TechStack = props => {
  const state = {
    show: true,
  };

  const icon_list = [
    "windowsIcon",
    "macIcon",
    "cloudImg",
    "linux",
    // // "rpic",
    // // "python",
    // "shiny",
    // "sql",
    // "js2",
    // "docker",
    // "aws",
  ];

  let icons = null;
  if (state.show) {
    icons = icon_list.map((icon, i) => {
      if (icon === "windowsIcon") {
        return (
          <Image
            key={i}
            src={require(`../assets/${icon}.png`)}
            rounded
            style={{
              width: "200px",
              height: "180px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
        );
      }
      if (icon === "cloudImg") {
        return (
          <Image
            key={i}
            src={require(`../assets/${icon}.png`)}
            rounded
            style={{
              width: "200px",
              height: "150px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
        );
      }
      return (
        <Image
          key={i}
          src={require(`../assets/${icon}.png`)}
          rounded
          style={{
            width: "140px",
            height: "auto",
            margin: "auto",
            marginTop: "20px",
          }}
        />
      );
    });
  }

  return (
    <div className={classes.container}>
      <Container>
        <h1 className={classes.techStackTitle}>How We Work</h1>
        <Row className="align-items-center">
          <div>
            <p className={classes.summary}>
              We’re fluent in today’s tech—so you don’t have to be.
              Whether you run your business on Windows or Mac, use cloud-based apps or old-school systems, we adapt to your setup and build around it. Our goal is to make your tech smoother, smarter, and more reliable—without disrupting your workflow.
              From routers and networks to business software, smart devices, and data systems—we’ll support what you use and recommend upgrades only when it truly makes sense.
              We don’t believe in one-size-fits-all. We believe in meeting you where you are, and taking you where you need to go.
            </p>
          </div>
          <div>
            <div className={classes.stack}>{icons}</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TechStack;
