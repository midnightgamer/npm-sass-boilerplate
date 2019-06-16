const fs = require('fs-extra');
var minifyAll = require("minify-all");
const dir = 'src';

try {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        fs.mkdirSync('dir/css')
    }
} catch (err) {
    console.error(err)
}

try {
    fs.copy('index.html', 'src/index.html', function (err) {
        if (!err) {
            console.log("Success")
        }
    });
    minifyAll("/css", { silent: true }, function(err){
        if(err){
            console.log(err);
        }
    });
} catch (e) {
    console.log(e)
}
