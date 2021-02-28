const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

const utils = require('./zoom/utils')

app.get('/', (req, res) => {
  res.send('Hello ! the api for avizio test is up')
})

app.get('/meetings', async (req, res) => {
  const meetings = await utils.getMeetings()
  // console.log('meetings',meetings);
  res.json({status : 'ok', statusCode: 200, meetings : meetings})
})

app.get('/meetings/new', (req, res) => {
  console.log('here');
  res.send('Hello World!')
})

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
