import React from 'react';

const Patient = ({ patient }) => {
  return (
    <div>
      {patient.firstName}  {patient.lastName}  {patient.bday}  {patient.recall}  {patient.facility}  {patient.recallInterval}  {patient.careCode}
    </div>
  )
}

export default Patient;