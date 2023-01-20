import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import patch from '../assets/hex_patch_blue.png'

import classes from './mission.module.css';


const Mission = props => {
    return (
        <div className={classes.container}>
        <Container>
            <h1 className={classes.title}>Our Philosophy</h1>
            <Row className="align-items-center">
                <Col >
                    <p className={classes.summary}>
                        At FausTTech we believe in high quality code, excellent user experience and sustainability.
                        We don't just build something, we integrate it into your existing system. In this way every
                        project is a unique piece of a growing system. Our aim is to never compromise on quality and
                        deliver a final product that is sustainable and expandable.
                    </p>
                </Col>
                <Col  //className={classes.imageContainer}
                >
                    {/* <img 
                        src={"../assets/hex_patch_blue.png"}
                    /> */}
                    {/* <div> */}

                 
                    <img 
                        alt=""
                        className={classes.comb}
                        src={patch}
                        style={{
                            // width: "80%",
                            // height: "auto",
                            // width: "auto"
                        }} 
                        />

                    {/* </div> */}
                   
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Mission;

