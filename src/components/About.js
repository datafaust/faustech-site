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
                    We’re two brothers from Queens, NYC who’ve always been passionate about technology. From building computers to exploring the latest tools and trends, tech has always been more than a hobby—it’s been our thing since day one. 
                    As we got older, that passion turned into purpose. We realized we could take our skills and use them to help local businesses stay ahead, stay connected, and stay running smoothly.
                    Queens is where we’re from—and we’re proud to serve the borough by bringing hands-on experience, real tech knowledge, and a no-nonsense attitude to every job we do.
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
