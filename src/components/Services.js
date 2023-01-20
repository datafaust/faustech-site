
import {
    Row,
    Container
} from "react-bootstrap";

import React, { useState } from 'react';
import ProjectCard from './smcomponents/ProjectCard';

import { FiMail } from 'react-icons/fi';


import classes from './services.module.css';

/**LOAD PROJECTS DATA */
import { projects } from '../assets/data/projects';

import Scroll from 'react-scroll';
const Link = Scroll.Link;

const Services = props => {

    const [projectsData] = useState(projects)

    let cards = null;
    if (projectsData) {
        cards = (
            projectsData.map((project, i) => {
                return <ProjectCard
                    key={i}
                    image={project.image}
                    title={project.title}
                    text={project.text}
                    // link={project.link}
                    tag={project.tag}
                />
            })
        )
    }


    return (
        <Container id="services" className={classes.container}
        >
            
            <h3 className={classes.title}>
                Our Services
            </h3>

            <Row className={classes.cardContainer}>
                {cards}
            </Row>

            <Link activeClass="" to="contact" spy={true} smooth={true} duration={500} offset={-60}>
                <div >
                    <button className={classes.serviceContactButton} >
                        <FiMail />
                        {" "}
                        Contact Us
                    </button>
                </div>
            </Link>
        </Container>
    );
};


export default Services;
