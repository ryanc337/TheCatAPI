const request = require('request');
// const fs = require('fs');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  if (args.length === 0) {
    console.log("Name either not found or user did not input a name");
  } else {
    ('error:', error);
    ('statusCode: ', response);
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }
});





