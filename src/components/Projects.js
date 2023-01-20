import React, { useState, useEffect } from 'react';
import ProjectCard from './smcomponents/ProjectCard';
import { Col, Row, ButtonGroup, ToggleButton } from 'react-bootstrap';

import classes from './projects.module.css';

/**LOAD PROJECTS DATA */
import { projects } from '../assets/data/projects';

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



const Projects = (props) => {

    const filters = [
        { name: 'All', value: 'all' },
        { name: 'Data', value: 'data' },
        { name: 'React', value: 'react' },
      ];
    

//   const [checked, setChecked] = useState(false);
  const [filterValue, setFilterValue] = useState('all');
  const [projectsData, setProjectsData] = useState(projects.sort(compare))



  const filterData = (value, myArray) => {
     
        setFilterValue(value);
        console.log('filter value: ',value);

      //filter the projects key
      if (value === 'data' || value === 'react') {
          const result =  myArray.filter(item => item.tag === value)
          console.log(result);
          setProjectsData(result.sort(compareReverse));
      } else {
         const result = projects
         console.log(result);
         setProjectsData(result.sort(compareReverse));
      }   
  }

   useEffect(() => {
       console.log('projects data has changed')
  }, [projectsData]);



  

    let cards = null;
    if (projectsData) {
      cards = (
        projectsData.map((project, i) => {
              return <ProjectCard
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
            <Row id='projects' className={classes.container}>
                <Col xs={4} className={classes.title}>
                    <div>Projects</div>
                    <ButtonGroup toggle>
        {filters.map((filter, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="filter"
            value={filter.value}
            checked={filterValue === filter.value}
            onChange={(e) => filterData(e.currentTarget.value, projects)}
          >
            {filter.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
                </Col>
                <Col className={classes.cards}>
                    <Row>
                        {cards}
                    </Row>
                </Col>
            </Row>
        );
}


export default Projects;
