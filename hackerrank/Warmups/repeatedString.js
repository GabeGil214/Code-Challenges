'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let multiplier = Math.floor(n/s.length);
    let remainder = n % s.length;
    let aCount = 0;
    let fullString = s;

    for(let j=0; j<fullString.length; j++){
        if(fullString[j] === 'a'){
            aCount++
        }
    }

    aCount = aCount*multiplier;


    if(remainder !== 0){
        for(let i=0; i<remainder; i++){
            if(fullString[i] === 'a'){
                aCount++
            }
        }
    }


    return aCount;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
