const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const patientSchema = Schema({
  firstName: String,
  lastName: String,
  faveColor: String,
},
{
  collection: 'Patients'
});

module.exports = mongoose.model('Patient', patientSchema);