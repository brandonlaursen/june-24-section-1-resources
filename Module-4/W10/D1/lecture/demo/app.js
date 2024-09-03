// app.js
const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {

  console.log(req);
  res.send('HELLLO');
})

app.get('/notes', (req, res) => {
  res.send('notes')
})

app.post('/notes', (req, res) => {
  console.log(req.body);

  res.end();
})

app.listen(8000, () => console.log("Listening on port 8000..."));
