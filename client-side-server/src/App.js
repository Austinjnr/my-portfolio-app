import React, { Component } from 'react';
import './App.css';
import Form from './components/form/Form';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <section>
        <Form />
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Link className="navbar-brand" to="/">MyPortfolio</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/aboutme">About Me</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <div className="page-content" />
          <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
              <Link className="navbar-brand" to="/">MyPortfolio</Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="nav-link" to="/resume">Resume</Link>
                  <Link className="nav-link" to="/aboutme">About Me</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </section>
    );
  }
}

export default App;
