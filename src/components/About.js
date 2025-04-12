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
                        At Queens Tech Bros, we're tech enthusiasts turned professionals—born and raised in Queens, NYC, and passionate about helping local businesses thrive through smart, reliable technology.
                        What started as a love for tinkering with computers and solving tech problems evolved into a full-service IT company. With years of hands-on experience and a deep understanding of how small businesses run, we’ve built our company around one mission: to make tech simple, effective, and accessible.
                        From IT support and Wi-Fi optimization to network installations, cybersecurity, website design, and AI automation—we provide solutions tailored to your specific needs. Whether you're setting up a new space or upgrading your existing systems, we’re here to make sure your tech just works.
                        We believe in doing things right the first time, communicating clearly, and building long-term relationships with our clients. Our approach is personal, professional, and grounded in the values of the borough we call home.
                        Queens made us. Now, we’re here to support the businesses that keep it moving.
                    </p>
                    {/* <br/>
                    <p>
                        We believe in treating every project as if it were our own,
                        focusing on good code quality and excellent user experience.
                        With a focus on the future, we are always looking to add more
                        value to our clients and provide robust, sustainable products.
                    </p> */}
                </div>
            </Row>
        </Container>
        </div>
    );
};


export default About;
