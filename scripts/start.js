const liveServer = require("live-server");
const fs = require('fs-extra');
//Directories that should be removed when npm start run
const dir = 'dummy';

try {
    /*Remove  unwanted directory is it exist*/
    if (fs.existsSync(dir)) {
        fs.removeSync(dir);
        console.log('\x1b[33m%s\x1b[0m', 'Deleting unwanted files... ', );
    }
} catch (err) {
    console.error(err);
}

//Responsible for creating live-server
try {
    console.log('\x1b[32m%s\x1b[0m', 'Creating Live-Server');
    liveServer.start()
}catch (e) {
    console.log(e)
}
