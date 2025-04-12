import React from 'react';
import { Row, Container } from 'react-bootstrap';

const Footer = props => {


    return (
        <Container fluid className='gx-0'>
        <Row className='gx-0' style={{ backgroundColor: "#485671", alignItems: 'center' }}>
            <p style={{ width: "40%", margin: "1% 30%", color: "white", textAlign: 'center' }}>
                2025 | Queens Tech 
            </p>


        </Row>
        </Container>
    );
};

export default Footer;