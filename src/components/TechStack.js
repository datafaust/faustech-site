import React from 'react';
import {
    Row,
    Image,
    Container,
    Col
} from "react-bootstrap";

// import rpic from "../assets/rpic.png";
// import shiny from "../assets/shiny.png";
// import sql from "../assets/sql.png";
// import js from "../assets/js2.png";
// import docker from "../assets/docker.png";
// import aws from "../assets/aws.png";

import classes from "./techstatus.module.css"

const TechStack = props => {

    const state = {
        show: true
    }

    const icon_list = [
        "rpic",
        "python",
        "shiny",
        "linux",
        "sql",
        "js2",
        "docker",
        "aws"];

    let icons = null;
    if (state.show) {
        icons = (
            icon_list.map((icon, i) => {

                return <Image
                    key={i}
                    src={require(`../assets/${icon}.png`)}
                    rounded
                    style={{
                        width: "140px",
                        height: "auto",
                        margin: "auto",
                        marginTop: "20px"
                    }}
                />
            })
        )
    }

    return (
        <div className = {classes.container}>
            <Container>
                <h1 className={classes.techStackTitle} >Our Tech Stack</h1>
                <Row className="align-items-center">   
                    <Col>
                        <div className={classes.stack}>
                            {icons}
                        </div>
                    </Col>
                    <Col>
                        <p className={classes.summary}>
                            Our expertise spans a variety of technologies, making us
                            very adaptable to your specific situation. We will work with 
                            your current setup to ensure our services are complimentary
                            and sustainable so that you can focus on your goals and objectives.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TechStack;
