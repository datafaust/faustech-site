import React from 'react';
import { Row, Container } from 'react-bootstrap';

import classes from './about.module.css';


const About = props => {
    return (
        <div className={classes.container} id="about" >
        <Container >  
            <h1 className={classes.title}>About Us</h1>
            <Row >
                <div className={classes.summary}>
                    <p>
                        FausTTech was created with one simple goal:
                        provide a one stop shop for your tech related needs,
                        while still delivering the highest quality service on
                        all fronts. Need a custom website or application? Not sure how to manage
                        your data and extract actionable insights? Are you looking to build a development
                        environment for your developers? Our experts will work with you to provide
                        custom solutions to your unique challenges.
                    </p>
                    <br/>
                    <p>
                        We believe in treating every project as if it were our own,
                        focusing on good code quality and excellent user experience.
                        With a focus on the future, we are always looking to add more
                        value to our clients and provide robust, sustainable products.
                    </p>
                </div>
            </Row>
        </Container>
        </div>
    );
};


export default About;
