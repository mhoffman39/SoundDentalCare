import React from 'react';

const PatientList = ({ getPatientList }) => {
  console.log('Hello World')


  return (
    <div>
      <button onClick={getPatientList}>
        Get Patient List
      </button>
    </div>
  )
}

export default PatientList;