import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import classes from './skills.module.css';

const  Skills = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className={classes.title}>Skills</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={classes.skillsContainer}>
                    R, Python, Reactjs, React Native, Node, Mysql, Sql Server, Spark, AWS, Azure, Clickhouse
                </Col>
            </Row>

        </Container>
   
    )
}


export default Skills

