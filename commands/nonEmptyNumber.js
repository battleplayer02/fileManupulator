var fs = require('fs');
module.exports = function (dirpath) {
    if (fs.statSync(dirpath).isFile()) {
        var olddata = fs.readFileSync(dirpath, 'utf8');
        olddata = olddata.split('\n');
        val = 1;
        olddata = olddata.map(line => {
            return line == '\r' ? line : val++ + '. ' + line
        })
        let newdata = olddata.join('')
        console.log(newdata);
        fs.writeFileSync(dirpath, newdata);
        console.log('Give numbering to non-empty lines.')
    } else {
        console.log('File Not Found...!');
    }
}