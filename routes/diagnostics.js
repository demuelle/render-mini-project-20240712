const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // DONE: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // DONE: Logic for appending data to the db/diagnostics.json file
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newDiagnostic = {
      time: Date.now(),
      error_id: uuidv4(),
      errors: {
        tip,
        topic,
        username
      }
    };

    readAndAppend(newDiagnostic, './db/diagnostics.json');
    res.json(`Diagnostic added successfully`);
  } else {
    res.error('Error in adding diagnostic');
  }

});

module.exports = diagnostics;
