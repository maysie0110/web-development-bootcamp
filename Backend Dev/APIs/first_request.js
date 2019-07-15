//make http request from node

const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const parseData = JSON.parse(body);
  console.log('body:', parseData.name + "lives in " + parseData.address.city); // Print the HTML for the Google homepage.

  // if(error){
    //     console.log("Something went wrong");
    //     console.log(error);
    // }
    // else{
    //     if(response.statusCode == 200){
    //         //things worked
    //         console.log(body);
    //     }
    // }

    // if(!error & response.statusCode === 200){
    //     const parseData = JSON.parse(body);
    //     console.log(parseData.name + "lives in " + parseData.address.city); // Print the HTML for the Google homepage.
    // }
});

