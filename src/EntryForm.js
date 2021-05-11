import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EntryForm = ( {savePatient} ) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bday, setBDay] = useState('');
  const [recall, setRecall] = useState('');
  const [facility, setFacility] = useState('');
  const [recallInterval, setRecallInterval] = useState('');
  const [careCode, setCareCode] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    savePatient(firstName, lastName, bday, recall, facility, recallInterval, careCode);
    setFirstName('');
    setLastName('');
    setRecall('');
    setBDay('');
    setFacility('');
    setRecallInterval('');
    setCareCode('');
    setNotes('');
  }

  return (
    <Form onSubmit={handleSubmit} >
      <Form.Row>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="birthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="mm/dd/yyyy"
            value={bday}
            onChange={e => setBDay(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group controlId="recallDate">
            <Form.Label>Recall Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="mm/dd/yyyy"
              value={recall}
              onChange={e => setRecall(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="facility">
            <Form.Label>Facility</Form.Label>
            <Form.Control
              type="text"
              value={facility}
              onChange={e => setFacility(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="recallInterval">
            <Form.Label>Recall Interval</Form.Label>
            <Form.Control as="select"
              value={recallInterval}
              onChange={e => setRecallInterval(e.target.value)}>
                <option></option>
                <option>1M</option>
                <option>2M</option>
                <option>3M</option>
                <option>4M</option>
                <option>6M</option>
                <option>12M</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="careCode">
          <Form.Label>Care Code</Form.Label>
          <Form.Control
            type="text"
            value={careCode}
            onChange={e => setCareCode(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="texarea" rows={3}  />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Add Patient
      </Button>
    </Form>
  );
}

export default EntryForm;