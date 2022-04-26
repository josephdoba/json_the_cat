const requests = require('request');
const args = process.argv.slice(2);
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
// https://api.thecatapi.com/v1/breeds/search?q=sib

if (args.length !== 1) {
  console.log("Nothing was searched or there was more than one inquiry");
} else {
  requests(('https://api.thecatapi.com/v1/breeds/search?q=' + args[0]), (error, response, body) => {
    if (error) {
      console.log("Oops, something went wrong.");
      return;
    } else {
      const data = JSON.parse(body);
      if (data[0]['name'] !== args[0]) {
        console.log("That Cat was not found. Please try again.");
        return;
      }
      setTimeout(() => {
        console.log(data[0]['description']);
      }, 500);
    }
  });
}