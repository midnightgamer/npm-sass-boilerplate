const fs = require('fs-extra');
const globby = require('globby');
const compressor = require('node-minify');
const concat = require('concat');

const Srcdir = 'src';
try {
    if (!fs.existsSync(Srcdir)) {
        fs.mkdirSync(Srcdir)
        //Creating new css folder inside src directory
        const cssFile = Srcdir+'/css';
        fs.mkdirSync(cssFile,function (err) {
            console.log(err)
        });
        //Creating new js folder inside src directory
        const jsFile = Srcdir+'/js';
        fs.mkdirSync(jsFile,function (err) {
            console.log(err)
        });

        //Copying Html file to src
        //TODO implement copy not only for index.html but all html files
        fs.copy('index.html', 'src/index.html', function (err) {
            if (!err) {
                console.log('\x1b[32m%s\x1b[0m', 'Transferring your all file to src....');
            }
        });
        //Concat All files from css directory to one css file
        globby(['css/*.css', '!node_modules']).then(paths => {
            concat(paths).then(result =>
                fs.outputFile('src/css/style.css', result, function(err) {
                    console.log(err); //null
                })
            )
        });
    }
} catch (err) {
    console.error(err)
}