import React from 'react';

const Patient = ({ patient }) => {
  return (
    <div>
      {patient.firstName}  {patient.lastName}  {patient.faveColor}
    </div>
  )
}

export default Patient;