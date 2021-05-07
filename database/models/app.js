const mongoose = require('mongoose');
const Patient = require('./patient.js');

exports.addPatient = async(fName, lName, fColor) => {
  const newPatient = new Patient({firstName: fName, lastName: lName, faveColor: fColor});
  newPatient.save(function(err, newPatient) {
    if (err) {
      return console.log(err);
    } else {
      console.log('Document Inserted');
    }
  })
};