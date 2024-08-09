import React from 'react';
import { 
    //Button,
     Card } from 'react-bootstrap'
import classes from './blogCard.module.css'



const BlogCard = (props) => {

    return (
        <Card style={{ width: '20rem' }} className={classes.cards} >
        <a href={props.link} target="_blank">
            <Card.Img style={{
                display:'block', 
                marginTop: '4%'
                }} variant="top" src={props.image} className = {classes.image}/>
            <Card.Body>
                <Card.Title style={{ 
                    fontSize: '1.5rem',
                    textAlign: 'center', 
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold'}}>
                        {props.title}
                </Card.Title>
                <Card.Text
                style={{
                    fontSize: '1.1rem',
                    fontFamily: 'Open Sans',
                    textAlign: 'center',
                    marginTop: '5%'
                }}>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </a>
    </Card>
    )
}

export default BlogCard;

