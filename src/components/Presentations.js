import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';

import classes from './presentations.module.css';
import cv from '../assets/pooper.jpg';

const slides= [
    {
        "title": "Socrata Connect 2018: TLC & the Taxi Industry",
        "summary": "I presented at a conference in Austin, covering taxi indicators.",
        "date": "May 17, 2018 12:00 AM",
        "link": "https://www.faustolopez.com/talk/example/"
        // "image": {cv}
    },
    {
        "title": "Open Data Talk: TLC and Taxi Data At Civic Hall",
        "summary": "A fun talk with Open Data staff at Google’s Civi Hall offices, I had a chance to present some of the work we do at TLC, interesting trends and fun projects. Click to see a video of the presentation.",
        "date": "Jan 1, 2017 12:00 AM",
        "link": "https://www.faustolopez.com/talk/example/"
        // "image": {cv}
    }
];

/**CARD  */
const Slide = props =>{
    return (
        <div>
            <div>
                <div className={classes.slideTitle}>{props.title}</div>
                <div className={classes.summary}>{props.summary}</div>
                <div className={classes.date}>{props.date}</div>
            </div>
            {/* <Image className={classes.image} src={props.image} height={50} width={50} /> */}
        </div>
    )
}



const  Presentations = props => {

    let cards = null;
    if (slides) {
      cards = (
        slides.map((slide, i) => {
              return <a href={props.link} target='_blank'><Slide
                        key={i}
                        title={slide.title}
                        summary={slide.summary}
                        date={slide.date}
                        image={slide.image}
                    />
                    <br/>
                    </a>
            })
      )
    }

    return (

            <Row className={classes.container}>
                <Col xs={4} className={classes.title}>
                    <div>Presentations</div>
                </Col>
                <Col className={classes.presentations}>
                   {cards}
                </Col>
            </Row>
   
   
    )
}


export default Presentations

