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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {

    let count = 0;
    for(let i=1; i<s.length;i++){
        let anagramObj = {};

        for(let j=0;j+i<=s.length;j++){
            let currentSub = s.substr(j, i);
            if(currentSub){
                currentSub = currentSub.split('').sort().join('');
                if(anagramObj[currentSub]){
                    count += anagramObj[currentSub];
                    anagramObj[currentSub]++;
                } else {
                    anagramObj[currentSub] = 1;
                }
            }

        }
    }

    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
