const fs = require('fs-extra');
const dir = 'src';

try {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
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
} catch (e) {
    console.log(e)
}
