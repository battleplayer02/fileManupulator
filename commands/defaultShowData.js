module.exports = function(input){
    for (var i = 0; i < input.length; i++) {
        let dirpath = input[i];
        // console.log(dirpath);
        if (fs.statSync(dirpath).isFile())
            showContent(input[i])
        else console.log('Invalid File Path...!');
    }
}