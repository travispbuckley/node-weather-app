const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4711%20Yender%20Avenue%20Lisle',
    json: true
}, (error, response, body) => {
    console.log(body);
});