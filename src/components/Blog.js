import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import classes from './blog.module.css';

import BlogCard from './smcomponents/BlogCard';

// import data
import { projects } from '../assets/data/blogProjects';

const Blog = () => {

  //FUNCTION: SORT
  const compare = ( a, b ) => {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return +1;
    }
    return 0;
  }

  //FUNCTION: REVERSE SORT
  const compareReverse = ( a, b ) => {
    if ( a.date < b.date ){
      return +1;
    }
    if ( a.date > b.date ){
      return -1;
    }
    return 0;
  }

    const [projectsData, setProjectsData] = useState(projects.sort(compare))

    let cards = null;
    if (projectsData) {
      cards = (
        projectsData.map((project, i) => {
              return <BlogCard
                        key={i}
                        image={project.image}
                        title={project.title}
                        text={project.text}
                        link={project.link}
                        tag={project.tag}
                    />
            })
      )
    }


    return (
        <Container id="blog" className={classes.container} 
        >
            
            <h3 className={classes.title} >
                Our Blog
            </h3>

            <Row >
                {cards}
            </Row>

        </Container>
    );
};


export default Blog;