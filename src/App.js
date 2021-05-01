import React from 'react';
import axios from 'axios';
import EntryForm from './EntryForm.js';

const App = () => {

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

  return (
    <div>
      <h1>Sound Dental Care</h1>
      <EntryForm savePatient={savePatient}/>
    </div>
  )

}

export default App;