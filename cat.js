const { BADHINTS } = require('dns');
const fs = require('fs');

module.exports = function (fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    //console.log(data);

    process.stdout.write('\nprompt >');
  });
};
