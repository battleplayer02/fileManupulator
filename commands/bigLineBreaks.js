module.exports = function (dirpath) {
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
}