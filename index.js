// index.js
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2]; //accepts one terminal argument

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


