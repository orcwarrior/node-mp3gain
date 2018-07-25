# node-mp3gain

Simple transcompile with [emscripten](http://kripken.github.io/emscripten-site/) of original [mp3gain](http://mp3gain.sourceforge.net/) cli utility for detecting replaygain of file passed as an argument.
Take note it's prepared to work with node enviroment. After re-compilation to JS, simple hack was implemened to give a possibility to use relative path as ./ and root of the drive with / or C:\ As the programs compiled by emscripten needs filestystem to be mounted.

## mp3gain help
```Usage: ./mp3gain.js [options] <infile> [<infile 2> ...]
options:
        -v - show version number
        -g <i>  - apply gain i without doing any analysis
        -l 0 <i> - apply gain i to channel 0 (left channel)
                  without doing any analysis (ONLY works for STEREO files,
                  not Joint Stereo)
        -l 1 <i> - apply gain i to channel 1 (right channel)
        -e - skip Album analysis, even if multiple files listed
        -r - apply Track gain automatically (all files set to equal loudness)
        -k - automatically lower Track/Album gain to not clip audio
        -a - apply Album gain automatically (files are all from the same
                      album: a single gain change is applied to all files, so
                      their loudness relative to each other remains unchanged,
                      but the average album loudness is normalized)
        -m <i> - modify suggested MP3 gain by integer i
        -d <n> - modify suggested dB gain by floating-point n
        -c - ignore clipping warning when applying gain
        -o - output is a database-friendly tab-delimited list
        -t - writes modified data to temp file, then deletes original
             instead of modifying bytes in original file
        -q - Quiet mode: no status messages
        -p - Preserve original file timestamp
        -x - Only find max. amplitude of file
        -f - Assume input file is an MPEG 2 Layer III file
             (i.e. don't check for mis-named Layer I or Layer II files)
        -? or -h - show this message
        -s c - only check stored tag info (no other processing)
        -s d - delete stored tag info (no other processing)
        -s s - skip (ignore) stored tag info (do not read or write tags)
        -s r - force re-calculation (do not read tag info)
        -s i - use ID3v2 tag for MP3 gain info
        -s a - use APE tag for MP3 gain info (default)
        -u - undo changes made (based on stored tag info)
        -w - "wrap" gain change if gain+change > 255 or gain+change < 0
              (use "-? wrap" switch for a complete explanation)
If you specify -r and -a, only the second one will work
If you do not specify -c, the program will stop and ask before
     applying gain change to a file that might clip```