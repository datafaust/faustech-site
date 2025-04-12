import React, { Component } from 'react'
import {
  Navbar, Nav
  //NavItem,
  //NavDropdown
} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
//import logo from '../assets/tennis-ball.png';
import classes from './navbar.module.css';
import Scroll from 'react-scroll';


const Link = Scroll.Link;

//"linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%)" 

class NavBarC extends Component {
  render() {
    return (
  
        <Navbar className="fixed-top" collapseOnSelect expand="lg" style={{ background: "linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%)" }}  variant="dark">
          <Navbar.Brand href="/" className={classes.title}>QUEENS TECH BROS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={classes.navbarChoices}>
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="about" spy={true} smooth={true} duration={500} offset={-60}>About</Link>
              </Nav.Link>
            </Nav>
            {/**Services **/}
            <Nav >
              <Nav.Link>
                <Link activeClass="" to="services" spy={true} smooth={true} duration={500} offset={-60}>Services</Link>
              </Nav.Link>
            </Nav>
            {/*CONTACT ME*/}
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="contact" spy={true} smooth={true} duration={500} offset={-60}>Contact</Link>
              </Nav.Link>
            </Nav>
            {/*BLOG */}
            {/* <Nav>
              <Nav.Link>
                <Link activeClass="" to="blog" spy={true} smooth={true} duration={500} offset={-60}>Blog</Link>
              </Nav.Link>
            </Nav> */}
            {/*TEAM */}
            <Nav>
              <Nav.Link>
                <Link activeClass="" to="team" spy={true} smooth={true} duration={500} offset={-60}>The Team</Link>
              </Nav.Link>
            </Nav>
            {/**FOUNDER INFO**/}
            {/* <Nav>
              <Nav.Link>
                <Link activeClass="" to="founder" spy={true} smooth={true} duration={500} offset={-60}>Founder</Link>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
  
    )
  }
}

export default NavBarC;