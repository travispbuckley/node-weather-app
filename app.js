const request = require('request');

// 4711 Yender Avenue

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4711%20Yender%20Avenue%20Lisle',
    json: true
}, (error, response, body) => {
    // console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Long: ${body.results[0].geometry.location.lng}`);
});