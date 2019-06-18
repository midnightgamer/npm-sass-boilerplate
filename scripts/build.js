const fs = require('fs-extra');
const globby = require('globby');
const concat = require('concat');
var CleanCSS = require('clean-css');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const Srcdir = 'src';
const cssFile = Srcdir+'/css';
const jsFile = Srcdir+'/js';

try {
    //Create new Src directory if not created
    if (!fs.existsSync(Srcdir)){
        fs.mkdirSync(Srcdir)
    }
    if(fs.existsSync(Srcdir)){
        //Creating new css folder inside src directory

        fs.mkdirSync(cssFile,function (err) {
            console.log(err)
        });
        //Creating new js folder inside src directory
        fs.mkdirSync(jsFile,function (err) {
            console.log(err)
        });
    }

}
catch (e) {
    console.log(e.message)
}

try{
    if (fs.existsSync(Srcdir)){

        //Copying Html file to src
        //TODO implement copy not only for index.html but all html files
        fs.copy('index.html', 'src/index.html', function (err) {
            if (!err) {
                console.log('\x1b[32m%s\x1b[0m', 'Transferring your all file to src....');
            }
        });

        globby(['css/*.css','!node_modules']).then(paths =>{
            concat(paths).then(result =>{
                postcss([ autoprefixer ]).process(result).then(preFixed => {
                    preFixed.warnings().forEach(warn => {
                        console.warn(warn.toString())
                    });
                    fs.outputFile(cssFile +'/style.css',preFixed.css);
                    var minifedCSS = new CleanCSS().minify(preFixed.css);
                    fs.outputFile(cssFile+'/style.min.css',minifedCSS.styles);
                });

            });
        })
    }
}
catch (e) {
    console.log(e.message)
}