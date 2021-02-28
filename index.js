const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello ! the api for avizio test is up')
})

app.get('/meetings', (req, res) => {
  console.log('here');
  res.send('Hello World!')
})

app.get('/meetings/new', (req, res) => {
  console.log('here');
  res.send('Hello World!')
})

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
