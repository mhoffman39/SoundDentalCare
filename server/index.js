const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const controller = require('../database/controller.js')
const database = require('../database/index.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')));

app.post('/patient', controller.addPatient);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});