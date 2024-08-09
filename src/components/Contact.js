import React, { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as emailjs from 'emailjs-com';
import classes from './contact.module.css';

import { FaCalendar } from 'react-icons/fa';

import { PopupModal } from "react-calendly";


const Contact = props => {

    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        show: false
    })

    const [showModal, setisOpen] = useState({
        isOpen: false
    });

    const resetForm = () => {
        setContactInfo({ email: "", message: "", subject: "" });
    }

    const handleChange = (e) => {

        const { name, value } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // const handleSubmit = (e) => {

    //     // alert("Email is sent");

    //     e.preventDefault()

    //     console.log(contactInfo);

    //     resetForm();
    // }

    const handleSubmit = (e) => {

        alert("Email is sent");

        e.preventDefault()

        const { email, message, subject } = contactInfo

        let templateParams = {
            from_name: email,
            to_name: 'faustolopez110@gmail.com',
            subject: subject,
            message_html: message,
        }

        emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAIL_PUBLIC_ID
        )

        resetForm()
    }

    return (
        <div className={classes.container}
            id="contact"
        >
            <Container fluid className='gx-0'//class = "col-xl-8 offset-xl-2 col-lg-10 offset-lg-1"
            >

                <h1 className={classes.title}>Contact Us</h1>

                <Row className='gx-0'>


                    <Col>


                        <div className={classes.summary}>
                            <p>For any inquiries, please email <a href='www.google.com'>faustoLopez110@gmail.com</a> or message us via the form on your right.</p>
                            <br />
                            <p>
                                Note that before any work can be performed, a (virtual) meeting is usually held to gather requirements and discuss your needs. Feel free to schedule a meeting below.
                            </p>
                        </div>

                        <br />

                        <button
                            className={classes.calendarButton}
                            onClick={() => setisOpen({ isOpen: true })}
                        >
                            <FaCalendar />
                            {" "}
                            Schedule a Meeting
                        </button>

                        { showModal.isOpen && (<PopupModal
                            url="https://calendly.com/faustolopez110/30-minute-connection-session"
                            onModalClose={() => setisOpen(false)}
                            open={showModal.isOpen}
                            /*
                             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                             */
                            rootElement={document.getElementById("root")}
                        />)}



                        {/* <br />

                <div className={classes.summary}>
                    You can also message us using the form below:
                </div> */}

                    </Col>


                    <Col>


                        <Form onSubmit={handleSubmit}
                            className={classes.form}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Name</Form.Label> */}
                                <Form.Control
                                    name="name"
                                    type="name"
                                    placeholder="Name"
                                    value={contactInfo.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {/* <br />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            name="phone"
                            type="phone"
                            placeholder="718-192-0000"
                            value={contactInfo.phone}
                            onChange={handleChange}
                        />
                    </Form.Group> */}
                            <br />
                            <Form.Group controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Your Email address</Form.Label> */}
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={contactInfo.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="exampleForm.ControlInput2">
                                {/* <Form.Label>Subject</Form.Label> */}
                                <Form.Control
                                    name="subject"
                                    type="subject"
                                    placeholder="Subject"
                                    value={contactInfo.subject}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label>Enter your Message</Form.Label> */}
                                <Form.Control as="textarea" rows="10"
                                    name="message"
                                    value={contactInfo.message}
                                    placeholder="Message"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br />
                            <Button
                                variant="warning"
                                type="submit"
                                style={{ width: '38%', margin: '5% 31%', padding: '10px 20px' }}>
                                Submit
                            </Button>
                        </Form>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Contact;
