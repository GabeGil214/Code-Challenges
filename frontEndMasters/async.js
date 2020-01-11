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
// */// (do not alter this line


/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb){
  for(let i=0;i<arr.length;i++){
    cb(arr[i], i);
  }
}

const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i){
  setTimeout(function(){
    console.log('printing element ' + i);
  }, delayTime)
}

forEach(delays, delayLog);

console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

function changeColor(){
  if($('body').css('backgroundColor') === "rgb(221, 238, 255)"){
    $('body').css('backgroundColor', 'rgb(255, 238, 221)');
  } else {
    $('body').css('backgroundColor', 'rgb(221, 238, 255)');
  }
}

$('#activate').click(function(){
  console.log('clicked #1');
  $('#color').click(changeColor);
})

// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 5');
// */// (do not alter this line)
