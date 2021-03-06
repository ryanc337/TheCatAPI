const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (breedName === undefined) {
      error = "no breed name provided or no breed name found";
    }
    if (error) {
      callback(error);
    } else {
      const desc = JSON.parse(body)[0]['description'].trim();
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
















