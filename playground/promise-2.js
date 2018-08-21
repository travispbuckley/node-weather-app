const request = require('request');

var geocodeAddress = (address) => {
    // returns a promise
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
            
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error || body.status === 'ZERO_RESULTS') {
                reject('Error Occured.');
            } else if (body.status === 'OK') {
                var location = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
                resolve(location);
            }
        });
    });
};

geocodeAddress('60532').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
