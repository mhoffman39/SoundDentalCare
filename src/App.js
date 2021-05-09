import React, { useState } from 'react';
import axios from 'axios';
import EntryForm from './EntryForm.js';
import GetPatientListButton from './GetPatientListButton.js';
import PatientList from './PatientList.js';

const App = () => {
  const [patientList, setPatientList] = useState();

  const savePatient = (fName, lName, fColor) => {
    axios.post('/patient', {
      firstName: fName,
      lastName: lName,
      faveColor: fColor
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
      <h1>Sound Dental Care</h1>
      <div>
        <EntryForm savePatient={savePatient}/>
        <GetPatientListButton getPatientList={getPatientList} />
        <PatientList  patientList={patientList}/>
      </div>
    </div>
  )
}

export default App;