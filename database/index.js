const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost/SoundDentalCare', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database: SoundDentalCare')
});
module.exports = {db}