import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EmployeeCard from './smcomponents/EmployeeCard';
import classes from './team.module.css';


const Team = props => {
    return (
        <div className={classes.container} id="team" >
            <Container >
                <h1 className={classes.title}>The Team</h1>
                <Row >
                    <Col>
                        <EmployeeCard
                            title={'Fausto Lopez'}
                            subtitle={'Founder - Full Stack & Data Engineering'}
                            image={'https://media.licdn.com/dms/image/C4D03AQF4a2FhUX9jdg/profile-displayphoto-shrink_400_400/0/1553571330316?e=1727913600&v=beta&t=9Ywl6Djbp4Mk14dtD-AV8xjynEMxV_0dxd3YMxoFE6s'}
                            summary={'John Doe is a seasoned Full Stack Engineer with over 10 years of experience in web development. He excels in creating scalable, high-performance applications using a wide range of technologies, including React, Node.js, and MongoDB. John is passionate about coding best practices and enjoys mentoring junior developers to help them achieve their potential.'}
                        />
                    </Col>
                    <Col>
                        <EmployeeCard
                            title={'Nicholas Lopez'}
                            subtitle={'Co Founder - Full Stack Software Engineer'}
                            image={'https://media.licdn.com/dms/image/D5635AQGnFk1zqfjDzQ/profile-framedphoto-shrink_400_400/0/1704773114313?e=1722981600&v=beta&t=itrRZrjfe7w0hqgyMMgSg9IZQSpwtO9IvGobmiH6WD4'}
                            summary={'John Doe is a seasoned Full Stack Engineer with over 10 years of experience in web development. He excels in creating scalable, high-performance applications using a wide range of technologies, including React, Node.js, and MongoDB. John is passionate about coding best practices and enjoys mentoring junior developers to help them achieve their potential.'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Team;