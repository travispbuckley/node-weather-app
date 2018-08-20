const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/0fb6e03c32f29ab595f5ea5d55c2b7a0/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
}

module.exports = {
    getWeather
}