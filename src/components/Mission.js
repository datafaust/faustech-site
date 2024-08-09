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
                        Like every piece of a honeycomb, products need to fit perfectly to provide a sustainable structure.
                        At FausTTech we prioritize that very sustainability. We don't just build something, we integrate it 
                        into your existing system. In this way we recognize every project as a unique piece of your growing business. 
                        Our aim is to never compromise on quality and deliver a final product that is sustainable so that it grows
                         when you grow.
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

