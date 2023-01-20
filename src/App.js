  
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = props => {
  return (
    <Router>
    <div>
      <Route exact path="/" component = {Home}/>
      <Route path="/about" component = {About}/>
      <Route path="/contact" component = {Contact}/>
      <Route path="/services" component = {Services}/>
      {/* <Route path="/pricing" component = {Pricing} /> */}
    </div>
    </Router>
  );
};


export default App;