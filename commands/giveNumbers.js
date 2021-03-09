module.exports = function (dirpath) {
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
}