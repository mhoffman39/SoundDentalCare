import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import EntryForm from './EntryForm.js';

const Navigation = ({ savePatient }) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Sound Dental Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="add">Add</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/add">
            <EntryForm savePatient={savePatient}/>
          </Route>
        </Switch>
    </div>
  )
}

export default Navigation;
