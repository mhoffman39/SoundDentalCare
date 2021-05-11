const patient = require('./models/app.js');

exports.addPatient = async(req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const bday = req.body.bday;
  const recall = req.body.recall;
  const facility = req.body.facility;
  const recallInterval = req.body.recallInterval;
  const careCode = req.body.careCode;
  await patient.addPatient(firstName, lastName, bday, recall, facility, recallInterval, careCode);
  res.status(200);
}

exports.getPatientList = async(req, res) => {
  const patientList = await patient.getPatientList();
  res.send(patientList);
}