const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('unable to connect.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log(`No results found for ${address}`);
        } else if (body.status === 'OK') {
            console.log(body.results[0].formatted_address);
            console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            console.log(`Long: ${body.results[0].geometry.location.lng}`);
        }
    });
}

// need to export this function
module.exports = {
    geocodeAddress
};