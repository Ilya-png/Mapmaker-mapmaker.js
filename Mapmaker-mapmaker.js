
function doubleAll(input) {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
} 

function yelledGreetings(input) {
  let yelledArray = [];
  for (let i = 0; i < array.length; i++) {
    yelledArray.push(array[i] + '!');
  }
  return yelledArray;
} 

function absoluteValues(input) {
  let absoluteValues = [];
  for (let i = 0; i < array.length; i++) {
    absoluteValues.push(Math.abs(array[i]));
  }
  return absoluteValues;
} 

function upperCaseFirstLetters(input) {
  let upperCaseFirstLetters = [];
  for (let i = 0; i < array.length; i++) {
    upperCaseFirstLetters.push(array[i][0].toUpperCase() + array[i].slice(1).toLowerCase());
  }
  return upperCaseFirstLetters;
}

function changeToInitials(input) {
  initials = [];
  for (let i = 0; i < array.length; i++) {
    let secondInitial = 1 + array[i].indexOf(' ');
    initials.push(array[i][0] + array[i][secondInitial]);
  }
  return initials;
}

function doubleOdd(input) {
  doubleOdd = [];
  for (i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 === 1) {
      doubleOdd.push(array[i] * 2);
    }
    else {
      doubleOdd.push(array[i]);
    }
  } 
  return doubleOdd;
}

function add1ToLeft(input) {
  addedOne = [];
  for(let i = 0; i < array.length; i++) {
    if (array[i] >= 0) { 
      addedOne.push(Number('1' + array[i]))
    }
    if (array[i] < 0) {
      addedOne.push(-1 * Number('1' + Math.abs(array[i])))
    }
  } 
  return addedOne;
}
