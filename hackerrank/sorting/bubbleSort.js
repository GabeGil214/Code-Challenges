'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSwaps function below.
function countSwaps(a) {
    let isSorted = false;
    let lastUnsorted = a.length - 1;
    let swapCount = 0;

    while(!isSorted){
        isSorted = true;
        for(let i=0;i<lastUnsorted;i++){
            if(a[i] > a[i + 1]){
                let temp = a[i];
                a[i] = a[i+1];
                a[i + 1] = temp;
                isSorted = false;
                swapCount++;
            }
        }

        lastUnsorted--;
    }

    console.log(`Array is sorted in ${swapCount} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length -1]}`);


}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
