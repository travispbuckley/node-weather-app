# node-weather-app

Practice using node.js asynchronous functionality. Use request library for weather and geolocation API calls. Use of Axios library 
for built in promises to refactor original weather terminal application.

Tech:
  - Node.js
  - Request Library
  - Axios Library
  - Yargs Library
  - Google Geolocation API
  - DarkSky Weather API

To use:
- Ensure Node.js is installed.
- Clone this repository. 
- CD into node-weather-app.
- npm install to install dependencies.
- run node app-promise -a 'Valid Address Here'
  - -a flag can be zip code, address, etc. Will use googlemaps geolocation to find lat/lng for that information, and then call
    darksky weather API to get weather information.
