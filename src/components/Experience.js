import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ExperienceCard from './smcomponents/ExperienceCard';

import classes from './experience.module.css';

const Experience = props => {
    return (
        <Row className={classes.container}>
            <Col xs={4} className={classes.title}>Experience</Col>
            <Col className={classes.cards}>
                <ExperienceCard 
                    title={'Director of Data Engineering & Analytics'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />
                <br/>
                <ExperienceCard 
                    title={'Data & Analytics Manager'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Jul 2016 – Aug 2019'}
                    text1={'Design and automate analytical frameworks to produce internal and public facing metrics on over 1 billion taxi trip records, creating Shiny/Tableau dashboards and tracking KPIs.'}
                    text2={'Designed and built Postgres and Clickhouse databases hosting over 300 gigabytes of Citi Bike, taxi and driver income data and increasing reporting speeds by over 500%.'}
                    text3={'Rapid prototype dashboard tools, analytical processes, ETL procedures and customer applications in partnership with data engineers and IT personnel for production release.'}
                    text4={'Spearheaded landmark Driver Income study leading to first national vehicle cap on ride sharing companies and minimum driver pay.'}
                />
                <br/>
                <ExperienceCard 
                    title={'Data & Evaluation Manager'}
                    workplace={'Urban Upbound'}
                    time={'Jun 2015 – Jun 2016'}
                    text1={'Oversaw and managed over 6 separate databases to track outcomes and reporting.'}
                    text2={'Developed evaluation protocols and analytical tools for testing program models.'}
                    text3={'Assisted in designing and implementing a study on financial stress as a predictor of financial counseling outcomes.'}
                    text4={'In partnership with New York Women’s Foundation, designed and implemented the Healthy * Aging Study, a qualitative report recommending resource upgrades for senior citizens in Far Rockaway.'}
                />
                <br/>
                <ExperienceCard 
                    title={'Monitoring & Evaluation Assistant'}
                    workplace={'Urban Upbound'}
                    time={'Jul 2014 – May 2015'}
                    text1={'Designed and implemented analytical tools.'}
                    text2={'Developed evaluation protocols for testing program models.'}
                    text3={'Analyzed data and produced quality reports.'}
                    text4={'Assisted in survey construction.'}
                />
            </Col>
        </Row>
    );
};


export default Experience;