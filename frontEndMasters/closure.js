// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


function createFunction() {
	function helloWorld() {
    return console.log('hello')
  }

  return helloWorld()
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
//function1();



function createFunctionPrinter(input) {
  let text = input;
	function returnInput(){
    return console.log(text);
  }
  return returnInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

//willCounter();
//willCounter();
//willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
  let num = x;
  function addByNum(y){
    return y + num;
  }
  return addByNum;
}

const addByTwo = addByX(2);
addByTwo(2);
// now call addByTwo with an input of 1
addByTwo(1);

// now call addByTwo with an input of 2



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let count = 0;
  let permanentValue;
  function returnOnce(input){
    if(count === 0){
      count++;
      permanentValue = func(input);
    }

    return permanentValue;
  }

  return returnOnce;
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {
	let numCalls = 1;
  let limit = count;
  return function(){
    if (numCalls < limit){
      numCalls++;
    } else {
      func();
    }
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	setTimeout(func, wait);
}


function rollCall(names) {
	let index = 0;
  let classList = names;
  return function(){
    if(index >= classList.length){
      console.log('Everyone accounted for')
    } else  {
      console.log(classList[index]);
    	index++;
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'
