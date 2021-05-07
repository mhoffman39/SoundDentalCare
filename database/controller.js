const patient = require('./models/app.js');

exports.addPatient = async(req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const faveColor = req.body.faveColor;
  await patient.addPatient(firstName, lastName, faveColor);
  res.status(200);
}