import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import Letter from './Letter.js';

const Patient = ({ patient }) => {
  const birthday = patient.bday.slice(0,10);
  const recallDay = patient.recall.slice(0, 10);
  const patientData = `${patient.firstName}  ${patient.lastName}   ${birthday}   ${recallDay}   ${patient.facility}   ${patient.recallInterval}   ${patient.careCode}   ${patient.notes}`

  const click = () => {
    console.log(patient);
    return <Letter patient={patient} />
  }



  return (
    <div>
      <ListGroup>
        <ListGroup.Item action variant="light" onClick={click}> {patientData} </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Patient;