//const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const request = require('request');
const curl = require('./curl.js');
const echo = require('./echo');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt >');
  };

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.includes(' ')) {
    let cmd2 = cmd.split(' ');
    if (cmd2[0] === 'cat') {
      cat(`./${cmd2[1]}`, done);
    } else if (cmd2[0] === 'curl') {
      curl(cmd2[1], done);
    } else if (cmd2[0] === 'echo') {
      echo(cmd2[1], done);
    }
  }
});
