const requests = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  requests(url, (error, _response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // If no errors found, parse the object into the data variable, and check the object for the breeds description:
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
      return;
    } else {
      callback("Breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };