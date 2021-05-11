const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const patientSchema = Schema({
  firstName: String,
  lastName: String,
  bday: Date,
  recall: Date,
  facility: String,
  recallInterval: String,
  careCode: String,
},
{
  collection: 'Patients'
});

module.exports = mongoose.model('Patient', patientSchema);