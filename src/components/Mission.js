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
                    At Queens Tech Bros, we believe in honest work done to perfection. Every job gets our full effort, because we treat your business like it’s our own. 
                    We don’t cut corners—we take pride in delivering tech solutions that are reliable, thoughtful, and built to last. With every project, we bring a personal touch, real passion,
                     and the same care we’d give to our own systems. That’s how we do business—Queens style.
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

