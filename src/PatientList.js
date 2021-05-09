import React from 'react';
import Patient from './Patient.js';

const PatientList = ({ patientList }) => {
  let list;
  if (patientList) {
    list = patientList.map((patient) =>
      <Patient key={patient._id} patient={patient} />
    )}

  return (
    <div>
      {list}
    </div>
  )
}

export default PatientList;