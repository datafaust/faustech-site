import React from "react";
import NavBarC from "./Navbar";
import About from "./About";
import Services from "./Services";
//import Presentations from './Presentations';
import Contact from './Contact';
//import Contact from './ContactUs';
import Footer from './Footer';
import TechStack from "./TechStack";
import Mission from "./Mission";
import Header from "./Header";
import Blog from "./Blog";
import Team from './Team';


// import ipad from "../assets/ipad.png";
// import iphone from "../assets/iphone.png";
// import logo from "../assets/logo.png";
// import bulb from "../assets/bulb.png";
// import phone from "../assets/phone.png";
// import email from "../assets/email.png";
// import python from "../assets/python.png";
// import linux from "../assets/linux.png";
// import stardust from "../assets/stardust.png";
// import mountain_grid_one from "../assets/mountain_grid_one.png";
// import wireframe_one from "../assets/wireframe_one.png";
// import hex from "../assets/hex.png"

// import LandingPageImage from "./LandingPageImage";

// import { FiMail } from 'react-icons/fi';

//fonts
import "../fonts/Azonix-1VB0.otf";

// import Scroll from 'react-scroll';
// const Link = Scroll.Link;


const Home = props => {

    return (
        <div>
            <NavBarC />
            {/* <LandingPageImage /> */}

            {/** HEADER LANDING */}
            <Header />

            <br/>
            {/**SERVICES */}
            <Services />
            <br/>
            {/**ABOUT US */}
            <About />
            <br/>
           
            {/**OUR MISSION */}
            <Mission />
            <br/>
            {/**TECH STACK PORTION */}
            <TechStack />
            <br/>
            <br/>
             {/**TEAM */}
             <Team />
            <br/>
            {/**CONTACT */}
            <Contact />
            {/**BLOG */}
            {/* <Blog />
            <br/> */}
            <br/>
            {/**FOOTER */}
            <Footer />

        </div>

    );
};


export default Home;