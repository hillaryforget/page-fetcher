//node fetcher.js http://www.example.edu/ ./name.html
//node fetcher.js http://www.google.com/ ./google.html
//command file URL new-file
console.log(process.argv);

//process.argv[2];
//process.argv[3];

console.log(process.argv[2]);
console.log(process.argv[3]);

const newFile = process.argv[3];
const URL = process.argv[2];

//it should download the resource at the URL to the local path on your machine.
//use request to download resource at the URL
const fs = require('node:fs');
const { argv } = require('node:process');
const writeFile = fs.writeFile;

const request = require('request');
request(URL, (error, response, body) => {
  writeFile(newFile, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

