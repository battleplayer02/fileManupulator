var fs = require('fs');
module.exports = function (dirpath) {
    if (fs.statSync(dirpath).isFile()) {
        var olddata = fs.readFileSync(dirpath, 'utf8');
        olddata = olddata.split('\n');
        olddata = olddata.filter(function (element) {
            return element !== '\r';
        })
        // console.log(olddata);
        let newdata = olddata.join('')
        olddata.forEach(element => {
            console.log(element);    
        });        // fs.writeFileSync(dirpath, newdata);
        console.log('Converted big line breaks into a singular line break');
    } else {
        console.log('File Not Found...!');
    }
}