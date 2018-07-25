# node-mp3gain

Simple transcompile with [emscripten](http://kripken.github.io/emscripten-site/) of original [mp3gain](http://mp3gain.sourceforge.net/) cli utility for detecting replaygain of file passed as an argument.
Take note it's prepared to work with node enviroment. After re-compilation to JS, simple hack was implemened to give a possibility to use relative path as ./ and root of the drive with / or C:\ As the programs compiled by emscripten needs filestystem to be mounted.
