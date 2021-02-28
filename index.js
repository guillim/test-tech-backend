const express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

const utils = require('./zoom/utils')

const jsonParser = bodyParser.json()

app.get('/', (req, res) => {
  res.send('Hello ! the api for avizio test is up')
})

app.get('/meetings', async (req, res) => {
  const meetings = await utils.getMeetings()
  // console.log('meetings',meetings);
  res.json({status : 'ok', statusCode: 200, meetings : meetings})
})

app.post('/meetings/new', jsonParser, async (req, res) => {
  if (req.body.topic
  && req.body.start_time
  && req.body.duration
  && req.body.password
  && req.body.agenda) {
    const meeting = await utils.createMeeting(req.body)
    if (meeting) {
      res.json({status : 'ok', statusCode: 200, meeting : meeting})
    } else {
      res.send('Meeting not created')
    }
  } else {
    res.send('Meeting not created because some parameter are missing')
  }
})

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
