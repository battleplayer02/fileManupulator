let fs = require('fs')
module.exports = function (dirpath) {
    fs.readFile(dirpath, 'utf8', function (err, data) {
        err ? console.log('Enter a valid file path.') : console.log(data);
    });
}