const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// a wildcard route in server.js that will send the users to a 404 page.
// Based on https://www.geeksforgeeks.org/understanding-the-function-of-a-wildcard-route-in-express-js/#
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/404.html'))
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
