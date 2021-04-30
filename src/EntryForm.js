import React, { useState, useEffect } from 'react';

const EntryForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [faveColor, setFaveColor] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(faveColor)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Favorite Color:
        <input
          type="text"
          value={faveColor}
          onChange={e => setFaveColor(e.target.value)} />
      </label>
      <input type="submit" value="Enter" />
    </form>
  );
}

export default EntryForm;