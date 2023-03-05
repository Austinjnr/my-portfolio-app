import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landingpg';
import About from './details/aboutme';
import Contact from './details/contact';
import Projects from './projects';
import Resume from './template/resume';


const Navbar = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Navbar;
