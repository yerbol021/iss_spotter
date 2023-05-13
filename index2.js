// index2.js

const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })