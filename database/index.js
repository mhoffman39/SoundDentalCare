const mongoose = require('mongoose');
const Patient = require('./models/patient.js');

mongoose.connect('mongodb://localhost:27017/SoundDentalCare', {useNewUrlParser: true, useUnifiedTopology: true});

const patients = [{firstName: 'Mason', lastName: 'Hoffman', faveColor: 'Blue'},{firstName: 'Paul', lastName: 'Luetke', faveColor: 'Green'},{firstName: 'Sarah', lastName: 'Luetke', faveColor: 'Red'}];
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database: SoundDentalCare');
  // Patient.insertMany(patients, function(error, docs) {});
  //   console.log('Docs inserted')
});

module.exports = {db}