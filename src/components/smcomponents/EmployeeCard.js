import React from "react";
import { Card, Image } from "react-bootstrap";
import classes from "./employeeCard.module.css";

/**IMAGE LOADING */
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import cv from "../../assets/curriculum-vitae.png";
import linkedin from "../../assets/linkedin.png";
import gitlab from "../../assets/gitlab.png";
import resume from "../../assets/fausto-lopez-resume.pdf";
import NicholasLopezResume from "../../assets/Nicholas-Lopez-Resume.pdf";

const EmployeeCard = props => {
  return (
    <Card className={classes.cards}>
      <Card.Body>
        <Card.Title>
          <div className={classes.title}>{props.title}</div>
        </Card.Title>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Image
            src={props.image}
            alt={props.alt}
            roundedCircle
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        </div>

        <Card.Title>
          <div className={classes.subtitle}>{props.subtitle}</div>
        </Card.Title>
        <Card.Text className={classes.summary}>{props.summary}</Card.Text>

        {/**PANEL */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px", // Adjusts the spacing between icons
            flexWrap: "wrap",
          }}
        >
          <a>
            <Image
              className={classes.icon}
              src={gmail}
              height={40}
              width={40}
              onClick={() =>
                window.open(`mailto:${props.email}?subject=Contact`)
              }
            />
          </a>
          <a href={props.github_link} target="_blank">
            <Image
              className={classes.icon}
              src={github}
              height={40}
              width={40}
            />
          </a>
          {/* <a href='https://gitlab.com/ulysses' target='_blank'><Image className={classes.icon}  src={gitlab} height={50} width={50} /></a> */}
          {props.title === "Nicholas Lopez" ? (
            <>
              <a
                href="https://www.linkedin.com/in/nicholas-lopez-83b031299/"
                target="_blank"
              >
                <Image
                  className={classes.icon}
                  src={linkedin}
                  height={40}
                  width={40}
                />
              </a>
              <a href={NicholasLopezResume} download="nico_resume.pdf">
                <Image
                  className={classes.icon}
                  src={cv}
                  height={40}
                  width={40}
                />
              </a>
            </>
          ) : (
            <>
              <a
                href="https://www.linkedin.com/in/lopezfausto"
                target="_blank"
              >
                <Image
                  className={classes.icon}
                  src={linkedin}
                  height={40}
                  width={40}
                />
              </a>
              <a href={resume} download="fausto-lopez-resume.pdf">
                <Image
                  className={classes.icon}
                  src={cv}
                  height={40}
                  width={40}
                />
              </a>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
