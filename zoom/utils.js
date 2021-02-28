const axios = require('axios');
const zoomApiKey = process.env.ZOOM_API_KEY || "default key";
const zoomUserId = process.env.ZOOM_USER_ID || "default userId";

axios.defaults.headers.common['Authorization'] = 'Bearer '+ zoomApiKey;

const getMeetings = async () => {
  return await axios.get('https://api.zoom.us/v2/users/'+zoomUserId+'/meetings')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return false
    })
    .then(function (res) {
      console.log('getMeetings fct is over : here is the result');
      return res
    });
}

const createMeeting = async (obj) => {
  // var data = JSON.stringify({
  //   "topic":"test title",
  //   "type":2,
  //   "start_time":"2021-02-28T12:00:00Z",
  //   "duration":"30",
  //   "timezone":"Europe/Paris",
  //   "password":"whatever",
  //   "agenda":"Your zoom is scheduled for any topic you want."
  // });
  const data = JSON.stringify(obj)
  return await axios.post('https://api.zoom.us/v2/users/'+zoomUserId+'/meetings',data,{headers: {'Content-Type': 'application/json'}})
    .then(function (response) {
      console.log(response.data);
      return (response.data && response.data.join_url) ? response.data : false
    })
    .catch(function (error) {
      console.log(error);
      return false
    })
    .then(function (res) {
      console.log('meeting creation finished');
      return res
    });
}
exports.getMeetings = getMeetings;
exports.createMeeting = createMeeting;
