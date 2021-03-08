let input = process.argv.slice(2);
var fs = require('fs');
let val = 0;

let options = input[0]
let showContent = require('./commands/showContent')

if (options == '-s' || options == '-n' || options == '-b') {

    let dirpath = input[1]
    switch (option) {
        //3- node wcat.js -s filepath => convert big line breaks into a singular line break
        case '-s':
            if (fs.statSync(dirpath).isFile()) {
                var olddata = fs.readFileSync(dirpath, 'utf8');
                olddata = olddata.split('\n');
                olddata = olddata.filter(function (element) {
                    return element !== '\r';
                })
                // console.log(olddata);
                olddata = olddata.join('')
                fs.writeFileSync(dirpath, olddata);
                console.log('Converted big line breaks into a singular line break');
            } else {
                console.log('File Not Found...!');
            }
            break;
        //4 - node wcat - n filepath => give numbering to all the lines
        case '-n':
            if (fs.statSync(dirpath).isFile()) {
                var olddata = fs.readFileSync(dirpath, 'utf8');
                olddata = olddata.split('\n');
                val = 1;
                olddata = olddata.map(line => {
                    return val++ + '. ' + line
                })
                olddata = olddata.join('')
                fs.writeFileSync(dirpath, olddata);
                console.log('Given numbering to all the lines.')
            } else {
                console.log('File Not Found...!');
            }
            break
        // 5- node wcat -b filepath => give numbering to non-empty lines
        case '-b':
            if (fs.statSync(dirpath).isFile()) {
                var olddata = fs.readFileSync(dirpath, 'utf8');
                olddata = olddata.split('\n');
                val = 1;
                olddata = olddata.map(line => {
                    return line == '\r' ? line : val++ + '. ' + line
                })
                olddata = olddata.join('')
                fs.writeFileSync(dirpath, olddata);
                console.log('Give numbering to non-empty lines.')
            } else {
                console.log('File Not Found...!');
            }
            break
        default:
            console.log('Enter A Valid Option');
            break;
    }

} else {
    //1- node wcat.js filepath => displays content of the file in the terminal 
    //2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
    for (var i = 0; i < input.length; i++) {
        let dirpath = input[i];
        // console.log(dirpath);
        if (fs.statSync(dirpath).isFile())
            showContent(input[i])
        else console.log('Invalid File Path...!');
    }
}