var fs = require('fs');
fs.readdir('./myfiles/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        // do something with each file HERE!
    });
 });