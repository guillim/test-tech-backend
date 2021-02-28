const axios = require('axios');
const zoomApiKey = process.env.ZOOM_API_KEY || "default key";
const zoomUserId = process.env.ZOOM_USER_ID || "default userId";

axios.defaults.headers.common['Authorization'] = 'Bearer '+ zoomApiKey;

// Make a request for a user with a given ID
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



exports.getMeetings = getMeetings;
