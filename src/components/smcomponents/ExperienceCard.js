import React from 'react';
import {
    //Button,
    Card
} from 'react-bootstrap'
import classes from './experienceCard.module.css'



const ExperienceCard = (props) => {

    return (
        <Card className={classes.cards}>
            <a href={props.link}>
                <Card.Body>
                    <Card.Title className={classes.title}>
                        {props.title}
                    </Card.Title>
                        <div className={classes.subtitle}>
                            <div>{props.workplace}</div>
                            <div>{props.time}</div>
                        </div>
                    <br />
                    <Card.Text className={classes.summary}>
                        <ul>
                            <li>{props.text1}</li>
                            <li>{props.text2}</li>
                            <li>{props.text3}</li>
                            <li>{props.text4}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default ExperienceCard;