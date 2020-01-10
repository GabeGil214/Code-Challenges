/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

 ///* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below

console.log('I am the beginning of the challenge');


function printTimeout(){
  console.log('I am in the setTimeout function');
}

setTimeout(printTimeout, 3000);

console.log('I am at the end of the code')







console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below

function intervalHello(){
  console.log('Interval Hello!');
}

let myInterval = setInterval(intervalHello, 2000);

setTimeout(function(){
  clearInterval(myInterval);
}, 10000)



// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

function everyXsecsForYsecs(func, x, y){
  let newInterval = setInterval(func, x*1000);
  setTimeout(function(){
    clearInterval(newInterval);
  }, y*1000)
}

function sayHowdy(){
  console.log('Howdy');
}

everyXsecsForYsecs(sayHowdy, 1, 5);

console.log('End of Challenge 3');
// */// (do not alter this line)
