import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import classes from './employeeCard.module.css';

/**IMAGE LOADING */
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import cv from '../../assets/curriculum-vitae.png';
import linkedin from '../../assets/linkedin.png';
import gitlab from '../../assets/gitlab.png'
import resume from '../../assets/fausto-lopez-resume.pdf';


const EmployeeCard = (props) => {
    return (
        <Card className={classes.cards}>
            <Card.Body>
                <Card.Title className={classes.title}>
                    {props.title}
                </Card.Title>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Image 
                        src={props.image}
                        alt={props.alt}
                        roundedCircle
                        style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                
                <Card.Title className={classes.subtitle}>
                    {props.subtitle}
                </Card.Title>
                <Card.Text className={classes.summary}>
                    {props.summary}
                </Card.Text>

                {/**PANEL */}
            <Row>
                <Col>
                <div style={{ textAlign: 'center' }}>
                    <a ><Image className={classes.icon} src={gmail} height={50} width={50} onClick={()=>window.open('mailto:faustolopez110@gmail.com?subject=Contact')} /></a>
                    <a href='https://www.linkedin.com/in/lopezfausto' target='_blank'><Image className={classes.icon}  src={linkedin} height={50} width={50} /></a>
                    <a href='https://github.com/datafaust' target='_blank'><Image className={classes.icon}  src={github} height={50} width={50} /></a>
                    <a href='https://gitlab.com/ulysses' target='_blank'><Image className={classes.icon}  src={gitlab} height={50} width={50} /></a>
                    <a href={resume} download="fausto-lopez-resume.pdf"><Image className={classes.icon}  src={cv} height={50} width={50} /></a>
                </div>
                </Col>
            </Row>
            </Card.Body>
        </Card>
    );
}

export default EmployeeCard;