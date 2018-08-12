require("babel-polyfill");
const fs = require('fs');
const {Writable} = require('stream');


const api = (function () {

    const mp3GainOutStream = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });
    let outStream = fs.createWriteStream('mp3gain-out.txt');

    // DK: For emscripten mp3gain so it won't run at start
    global.Module = {noInitialRun: true, arguments: null, stdout: outStream};
    const mp3gain = require('../mp3gain.js');
    delete mp3gain['arguments'];
    console.log(mp3gain);

    const mp3GainConfig = {
        args: ['-o']
    };

    function mp3gainByPaths(paths) {
        const passedArgs = (paths.length) ? paths : [paths];
        console.log("----- running mp3gain ----");
        setTimeout(() => {
            mp3gain
            console.log(`pkg.args: ${[...mp3GainConfig.args, ...passedArgs.map(a => a)]}`);
            mp3gain['run']([...mp3GainConfig.args, ...passedArgs.map(a => a)]);
            mp3gain.exit();
            outStream.close();
        });
        // console.log(mp3gainStr.strlen(4));
        console.log('..end');
    }

    return {
        getFilesMp3Gain: mp3gainByPaths,
        hello: "World!"
    };

})();

export default api;