import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Patient = ({ patient }) => {
  const birthday = patient.bday.slice(0,10);
  const recallDay = patient.recall.slice(0, 10);
  const patientData = `${patient.firstName}  ${patient.lastName}   ${birthday}   ${recallDay}   ${patient.facility}   ${patient.recallInterval}   ${patient.careCode}`

  return (
    <ListGroup>
      <ListGroup.Item action variant="light">{patientData}</ListGroup.Item>
    </ListGroup>
  )
}

export default Patient;