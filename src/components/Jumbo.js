import React, { useCallback } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Scroll from 'react-scroll';
import classes from './jumbo.module.css';
import { Button, Container } from 'react-bootstrap'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import logo from "../assets/logo.png";

import wp_dots from "../assets/wp_dots.gif"

const Jumbo = props => {

    return (

        <Particles
        params={{
          particles: {
            color: {
                value: "#ffffff",
            },
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
        
    );
};

export default Jumbo;