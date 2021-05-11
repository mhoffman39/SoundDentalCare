import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import EntryForm from './EntryForm.js';
import GetPatientListButton from './GetPatientListButton.js';
import PatientList from './PatientList.js';

const App = () => {
  const [patientList, setPatientList] = useState();

  const savePatient = (fName, lName, bday, recall, facility, recallInterval, careCode) => {
    axios.post('/patient', {
      firstName: fName,
      lastName: lName,
      bday: bday,
      recall: recall,
      facility: facility,
      recallInterval: recallInterval,
      careCode: careCode
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const getPatientList = () => {
    console.log('click')
    axios.get('/patient')
    .then(response => {
      setPatientList(response.data);
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  return (
    <div>
      <h1 className="company">Sound Dental Care</h1>
      <div className="container">
        <div>
          <EntryForm savePatient={savePatient}/>
        </div>
        <div>
          <GetPatientListButton getPatientList={getPatientList} />
          <PatientList  patientList={patientList}/>
        </div>
      </div>
    </div>
  )
}

export default App;