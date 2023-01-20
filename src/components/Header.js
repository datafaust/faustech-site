import React from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";

// import UseWindowDimensions from "./smcomponents/UseWindowDimensions";

import { FiMail } from 'react-icons/fi';
import Scroll from 'react-scroll';
import classes from "./header.module.css";


const Link = Scroll.Link;


const Header = props => {

    // const { height, width } = UseWindowDimensions();

    return (
        <div className={classes.headerLanding} >
           
            <Container fluid className='gx-0'>
                < Row className='gx-0'
                    // style={{maxHeight: "100vh"}}
                >
                     {/* <Image
                        className={classes.headerImage}
                        src = {hex_globe}
                        /> */}
                    <Col 
                    // style={{position: "absolute"}}
                    >
                        
                        <div className={classes.headerSet}
                        >

                            <h1 className={classes.title}>FAUSTTech</h1>
                            <h2 className={classes.subTitle}>Technology Consulting</h2>
                            <h4 className={classes.titlePhrase}>{"Prototype " + " > " + " Build " + " > " + " Deploy"}</h4>
                            <Link activeClass="" to="contact" spy={true} smooth={true} duration={500} offset={-60}>
                                <button className={classes.titleContactButton}>
                                    <FiMail />
                                    {" "}
                                    Contact Us
                                </button>
                            </Link>

                        </div>

                    </Col>
                </Row >
            </Container>
        </div>

    )
}


export default Header;