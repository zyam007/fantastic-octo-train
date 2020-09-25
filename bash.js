//const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  //   if(cmd.includes(' ')) {
  //       let cmd2 = cmd.split(' ');
  //   }

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.includes(' ')) {
    //cmd == 'cat bash.js'
    let cmd2 = cmd.split(' ');
    if (cmd2[0] === 'cat') {
      cat(`./${cmd2[1]}`);
    }
  }
});
