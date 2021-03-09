let input = process.argv.slice(2);
var fs = require('fs');
const bigLineBreaks = require('./commands/bigLineBreaks');
const defaultShowData = require('./commands/defaultShowData');
const giveNumbers = require('./commands/giveNumbers');
const nonEmptyNumber = require('./commands/nonEmptyNumber');
let val = 0;

let options = input[0]
let showContent = require('./commands/showContent')

if (options == '-s' || options == '-n' || options == '-b') {

    let dirpath = input[1]
    switch (options) {
        //3- node wcat.js -s filepath => convert big line breaks into a singular line break
        case '-s':
            bigLineBreaks(dirpath);
            break;
        //4 - node wcat - n filepath => give numbering to all the lines
        case '-n':
            giveNumbers(dirpath)
            break
        // 5- node wcat -b filepath => give numbering to non-empty lines
        case '-b':
            nonEmptyNumber(dirpath)
            break
        default:
            console.log('Enter A Valid Option');
            break;
    }

} else {
    //1- node wcat.js filepath => displays content of the file in the terminal 
    //2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
    defaultShowData(input);
}