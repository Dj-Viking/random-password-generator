const passLengthInputNum = Number(document.getElementById('passlength').value);
const passLengthInputEl = document.getElementById('passlength');
const invalidInputText = document.getElementById('invalidInput');
const invalidNumberText = document.getElementById('invalidNumber');
const generateButtonEl = document.getElementById('generate');
const generatedPasswordEl = document.getElementById('password');
const generatedPasswordDisplayLengthEl = document.getElementById('passwordDisplayLength');
const upperCaseArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCaseArray = Array.from(("ABCDEFGHIJKLMNOPQRSTUVWXYZ").toLowerCase())
const numArray = Array.from('0123456789');
const symbolsArray = shuffleArray(Array.from('!@#$%^&*()_+-=|}{[]?/>.<,¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“åß∂ƒ©˙∆˚')).splice(0, 26);
generatedPasswordDisplayLengthEl.style.display = "none";
generatedPasswordEl.style.display = "none";
//clear the inputs on the page on page load
document.addEventListener("DOMContentLoaded", function() 
{
  document.getElementById('passlength').value = null;
  document.getElementById('password').value = null;
  document.getElementById('uppercase').checked = false;
  document.getElementById('lowercase').checked = false;
  document.getElementById('numbers').checked = false;
  document.getElementById('symbols').checked = false;
});
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
function setPassLengthText(newEl, passEl) 
{
  //set the text
  newEl.innerText = `Your password length is: ${passEl.value.length.toString()}`
  //show the passlength text element
  newEl.style.display = "block";
  //show the textarea element
  passEl.style.display = "block";
}
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

//listen for the input on the passlength input element
// validate input - show/hide message and disable/enable generate button
passLengthInputEl.addEventListener("input", function() 
{
  const recentInput = document.getElementById('passlength').value;
  //empty string when strings are typed on the input type="number"
  if (recentInput === "") 
    showInvalidTextMsg(invalidInputText, generateButtonEl);
  //when a number is finally typed into the field
  else if (typeof Number(recentInput) === "number") 
    hideInvalidTextMsg(invalidInputText, generateButtonEl);
  // number out of range
  if (Number(recentInput) < 8 || Number(recentInput) > 1000) 
    showInvalidNumMsg(invalidNumberText, generateButtonEl);
  //correct number
  else if(Number(recentInput >= 8 && Number(recentInput) <= 1000)) 
    hideInvalidNumMsg(invalidNumberText, generateButtonEl); 
});

//listen for changes on the password textarea and update the element displaying the length
generatedPasswordEl.addEventListener("input", function()
{
  const recentInput = document.getElementById('password').value;
  setNewPassLengthText(recentInput, generatedPasswordDisplayLengthEl);
});

function generatePassword(event) 
{
  event.preventDefault();
  //getting the values when the form is submitted and not when the document renders
  const passLength = Number(document.getElementById('passlength').value);
  const uppercaseCheck = document.getElementById('uppercase').checked;
  const lowercaseCheck = document.getElementById('lowercase').checked;
  const numbersCheck = document.getElementById('numbers').checked;
  const symbolsCheck = document.getElementById('symbols').checked;

  const checkedArrayTypes = [
    uppercaseCheck && "uppercase",
    lowercaseCheck && "lowercase", 
    numbersCheck && "numbers", 
    symbolsCheck && "symbols"
  ];

  console.log(chooseArrays(checkedArrayTypes));
  if (passLength === 0) return alert('Must enter a password length');
  //none were checked
  if (!uppercaseCheck && !lowercaseCheck && !numbersCheck && !symbolsCheck) return alert('must select at least one category');

  if (checkedArrayTypes.length > 0) {
    generatedPasswordEl.value = createPasswordText(passLength, scrambleArraysAndSplice(passLength, chooseArrays(checkedArrayTypes)));
    setPassLengthText(generatedPasswordDisplayLengthEl, generatedPasswordEl);
  }
}
generateButtonEl.addEventListener("click", generatePassword);