module.exports = function (dirpath) {
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
}