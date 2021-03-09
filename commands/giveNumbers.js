var fs = require('fs');
module.exports = function (dirpath) {
    if (fs.statSync(dirpath).isFile()) {
        var olddata = fs.readFileSync(dirpath, 'utf8');
        olddata = olddata.split('\n');
        val = 1;
        olddata = olddata.map(line => {
            return val++ + '. ' + line
        })
        // let newdata = ""
        olddata.forEach(element => {
            console.log(element);    
        });
        // fs.writeFileSync(dirpath, newdata);
        console.log('Given numbering to all the lines.')
    } else {
        console.log('File Not Found...!');
    }
}