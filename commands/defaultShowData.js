var fs = require('fs');
const showContent = require('./showContent');
module.exports = function(input){
    for (var i = 0; i < input.length; i++) {
        let dirpath = input[i];
        // console.log(dirpath);
            showContent(input[i])
    }
}