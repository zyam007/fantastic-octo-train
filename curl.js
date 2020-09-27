const request = require('request');

module.exports = function (websiteName, done) {
  request(websiteName, function (error, response, body) {
    if (error) {
      //process.stdout.write('BIG ERROR\n');
      done('BIG ERROR');
    } else {
      //console.log(body);
      done(body);
    }
    //process.stdout.write('prompt > ');
  });
};
