const { BADHINTS } = require('dns');
const fs = require('fs');

module.exports = function (fileName, done) {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data);
  });
};
