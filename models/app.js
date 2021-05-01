const mongoose = require('mongoose');
const patient = require('./patient.js')

exports.addPatient = async() => {
  return await Patient.addOne({})
}