//setter functions for showing and hiding invalid inputs
function showInvalidTextMsg(textEl, button) {textEl.classList.remove('invalid-text-hidden');textEl.classList.add('invalid-text');button.disabled = true;}
function hideInvalidTextMsg(textEl, button) {textEl.classList.remove('invalid-text');textEl.classList.add('invalid-text-hidden');button.disabled = false;}

//setter functions for showing and hiding invalid number inputs
function showInvalidNumMsg(textEl, button) {textEl.classList.remove('invalid-number-hidden');textEl.classList.add('invalid-number');button.disabled = true;}
function hideInvalidNumMsg(textEl, button) {textEl.classList.remove('invalid-number');textEl.classList.add('invalid-number-hidden');button.disabled = false;}

//create a randomIndexNumber within the range of an array passed into this function
/**
 * 
 * @param {Array<any>} arr any array that we want the amount of indicies it has
 * @returns {Number} the amount of indicies in the passed in array
 */
function getArrayIndiciesNum(arr) {return arr.length - 1;}
/**
 * 
 * @param {Number} min this should be 0 by default, starting at beginning of the array
 * @param {Number} max The length of the array passed in (using a function to dynamically generate this number)
 * @returns {Number} return a random number within the range of how many indicies the passed in array has
 * @example
 * arr[createRandomIndex(0, getArrayIndiciesNum(arr))]
 * 
 */
function createRandomIndex(min, max) {return Math.floor(Math.random() * (max - min) + min);}

//setter function for the password input length element
/**
 * 
 * @param {HTMLElement} newEl 
 * @param {HTMLElement} passEl 
 */
function setPassLengthText(newEl, passEl) 
{
  //set the text
  newEl.innerText = `Your password length is: ${passEl.value.length.toString()}`
  //show the passlength text element
  newEl.style.display = "block";
  //show the textarea element
  passEl.style.display = "block";
}
/**
 * 
 * @param {string} input 
 * @param {HTMLElement} newEl 
 * @returns {void} sets the passlength text to display the lengthe of the created password
 */
function setNewPassLengthText(input, newEl) {newEl.innerText = `Your new password length is: ${input.length.toString()}`;}

/**
 * 
 * @param {Array<any>} anyArray 
 * @returns {Array<any>} shuffled array
 */
function shuffleArray(anyArray) 
{
  for (let i = anyArray.length - 1; i > 0; i--) 
  {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = anyArray[i];
    anyArray[i] = anyArray[j];
    anyArray[j] = temp;
  }
  return anyArray;
}
/**
 * 
 * @param {Number} passLength length of the password to generate
 * @param {Array<String[]>} options arrays to use for the scramble
 * @returns {String[]} spliced and uberly scrambled array
 */
function scrambleArraysAndSplice(passLength, options) 
{
  let arrToShuffle = [].concat(...options);
  for (let i = 0; i < 100; i++)
  {
    arrToShuffle = shuffleArray(arrToShuffle);
  }
  return arrToShuffle.splice(0, passLength);
}
/**
 * 
 * @param {Number} passLength length of the password to generate
 * @param {String[]} splicedArr Array that we are using to replace the values of a new empty array that has the length of the password
 * @returns {String} the returned password text that we are setting the value of the textarea element to
 */
function createPasswordText(passLength, splicedArr) 
{
  const arr = new Array(passLength);
  for (let i = 0; i < arr.length; i++)
  {
    arr[i] = 
      splicedArr[
        createRandomIndex(0, getArrayIndiciesNum(splicedArr))
      ]
    ;
  }
  return arr.join('');
}

/**
 * 
 * @param {string[]} arrayIds 
 * @returns {Array<string[]>}
 */
function chooseArrays(arrayIds){
  const chosenArrays = [];
  arrayIds.forEach(id => {
    if (typeof id === "string") {
      if (id === "uppercase") chosenArrays.push(upperCaseArray);
      if (id === "lowercase") chosenArrays.push(lowerCaseArray);
      if (id === "numbers") chosenArrays.push(numArray);
      if (id === "symbols") chosenArrays.push(symbolsArray);
    }
  })
  return chosenArrays;
}