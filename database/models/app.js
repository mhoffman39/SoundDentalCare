const mongoose = require('mongoose');
const Patient = require('./patient.js');

exports.addPatient = async(fName, lName, bday, recall, facility, recallInterval, careCode, notes) => {
  const newPatient = new Patient({firstName: fName, lastName: lName, bday: bday, recall: recall, facility: facility, recallInterval: recallInterval, careCode: careCode, notes: notes});
  newPatient.save(function(err, newPatient) {
    if (err) {
      return console.log(err);
    } else {
      console.log('Document Inserted');
    }
  })
};

exports.getPatientList = async() => {
  const patients = await Patient.find({});
  return patients;
}