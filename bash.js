const pwd = require('./pwd');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
    const cmd = data.toString().trim();
    if(cmd === 'pwd') {
        pwd();
    }
    // const str = process.cwd();
    // process.stdout.write(str);
    //process.stdout.write('You typed: ' + cmd);
   // process.stdout.write('\nprompt >');
});

