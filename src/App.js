import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios';
import EntryForm from './EntryForm.js';
import GetPatientListButton from './GetPatientListButton.js';
import PatientList from './PatientList.js';
import Home from './Home.js';

const App = () => {
  const [patientList, setPatientList] = useState();

  const savePatient = (fName, lName, bday, recall, facility, recallInterval, careCode, notes) => {
    axios.post('/patient', {
      firstName: fName,
      lastName: lName,
      bday: bday,
      recall: recall,
      facility: facility,
      recallInterval: recallInterval,
      careCode: careCode,
      notes: notes
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const getPatientList = () => {
    axios.get('/patient')
    .then(response => {
      setPatientList(response.data);
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Sound Dental Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/add">Add</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/list">Patient List</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/add">
            <div>
              <EntryForm savePatient={savePatient}/>
            </div>
          </Route>
          <Route path="/list">
            <div>
              <GetPatientListButton getPatientList={getPatientList} />
              <PatientList  patientList={patientList}/>
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;