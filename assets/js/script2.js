const passLengthInputNum = Number(document.getElementById('passlength').value);
const passLengthInputEl = document.getElementById('passlength');
const invalidInputText = document.getElementById('invalidInput');
const invalidNumberText = document.getElementById('invalidNumber');
const generateButtonEl = document.getElementById('generate');
const generatedPasswordEl = document.getElementById('password');
const generatedPasswordDisplayLengthEl = document.getElementById('passwordDisplayLength');
generatedPasswordDisplayLengthEl.style.display = "none";
const upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numArray = Array.from('0123456789');
const symbolsArray = Array.from('!@#$%^&*()_+-=|}{[]?/>.<,¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“åß∂ƒ©˙∆˚');
console.log(symbolsArray);
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
function shuffleArray(anyArray) {
  for (var i = anyArray.length - 1; i > 0; i--) 
  {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = anyArray[i];
    anyArray[i] = anyArray[j];
    anyArray[j] = temp;
  }
  return anyArray;
}
//setter functions for showing invalid inputs
function showInvalidTextMsg(textEl, button) {textEl.classList.remove('invalid-text-hidden');textEl.classList.add('invalid-text');button.disabled = true;}
function hideInvalidTextMsg(textEl, button) {textEl.classList.remove('invalid-text');textEl.classList.add('invalid-text-hidden');button.disabled = false;}
//setter functions for showing invalid number inputs
function showInvalidNumMsg(textEl, button) {textEl.classList.remove('invalid-number-hidden');textEl.classList.add('invalid-number');button.disabled = true;}
function hideInvalidNumMsg(textEl, button) {textEl.classList.remove('invalid-number');textEl.classList.add('invalid-number-hidden');button.disabled = false;}
//create a randomIndexNumber within the range of an array passed into this function
function getArrayIndiciesNum(arr) {return arr.length - 1;}
function createRandomIndex(min, max) {return Math.floor(Math.random() * (max - min) + min);}
//listen for the input on the passlength input element
// validate input - show/hide message and disable/enable generate button
passLengthInputEl.addEventListener("input", function() 
{
  const recentInput = document.getElementById('passlength').value;
  //empty string when strings are typed on the input type="number"
  if (recentInput === "") showInvalidTextMsg(invalidInputText, generateButtonEl);
  //when a number is finally typed into the field
  else if (typeof Number(recentInput) === "number") hideInvalidTextMsg(invalidInputText, generateButtonEl);
  // number out of range
  if (Number(recentInput) < 8 || Number(recentInput) > 1000) showInvalidNumMsg(invalidNumberText, generateButtonEl);
  //correct number
  else if(Number(recentInput >= 8 && Number(recentInput) <= 1000)) hideInvalidNumMsg(invalidNumberText, generateButtonEl); 
});

function generatePassword(event) 
{
  event.preventDefault();
  //getting the values when the form is submitted and not when the document renders
  const validNumber = Number(document.getElementById('passlength').value);
  const uppercaseCheck = document.getElementById('uppercase').checked;
  const lowercaseCheck = document.getElementById('lowercase').checked;
  const numbersCheck = document.getElementById('numbers').checked;
  const symbolsCheck = document.getElementById('symbols').checked;

  if (validNumber === 0) return alert('Must enter a password length');
  //none were checked
  if (!uppercaseCheck && !lowercaseCheck && !numbersCheck && !symbolsCheck) return alert('must select at least one category');
  //only uppercase
  if (uppercaseCheck) 
  {
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = upperCaseArray[createRandomIndex(0, getArrayIndiciesNum(upperCaseArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //only lowercase
  if (lowercaseCheck)
  {
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = lowerCaseArray[createRandomIndex(0, getArrayIndiciesNum(lowerCaseArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //only numbers
  if (numbersCheck)
  {
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = numArray[createRandomIndex(0, getArrayIndiciesNum(numArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //only symbols
  if (symbolsCheck)
  {
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = symbolsArray[createRandomIndex(0, getArrayIndiciesNum(symbolsArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //upper and lower
  if (uppercaseCheck && lowercaseCheck) 
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(lowerCaseArray);
    //shuffle a ton of times
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    //splice at the length of the password
    const splicedArray = shuffledArray.splice(0, validNumber);
    //create a new array and use the spliced array values and join the array to a string
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //numbers and symbols
  if (numbersCheck && symbolsCheck)
  {
    let shuffledArray = [];
    let concattedArray = numArray.concat(symbolsArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //upper and symbols
  if (uppercaseCheck && symbolsCheck)
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(symbolsArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //lower and symbols
  if (lowercaseCheck && symbolsCheck) 
  {
    let shuffledArray = [];
    let concattedArray = lowerCaseArray.concat(symbolsArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //upper and numbers
  if (uppercaseCheck && numbersCheck)
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(numArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //lower and numbers
  if (lowercaseCheck && numbersCheck)
  {
    let shuffledArray = [];
    let concattedArray = lowerCaseArray.concat(numArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //upper and lower and numbers
  if (uppercaseCheck && lowercaseCheck & numbersCheck)
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(lowerCaseArray);
    concattedArray = numArray.concat(concattedArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //upper and numbers and symbols
  if (uppercaseCheck && numbersCheck && symbolsCheck)
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(numArray);
    concattedArray = symbolsArray.concat(concattedArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //lower and numbers and symbols
  if (lowercaseCheck && numbersCheck && symbolsCheck)
  {
    let shuffledArray = [];
    let concattedArray = symbolsArray.concat(lowerCaseArray);
    concattedArray = numArray.concat(concattedArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
  //all were checked
  if (uppercaseCheck && lowercaseCheck && numbersCheck && symbolsCheck) 
  {
    let shuffledArray = [];
    let concattedArray = upperCaseArray.concat(lowerCaseArray);
    concattedArray = numArray.concat(concattedArray);
    concattedArray = symbolsArray.concat(concattedArray);
    for (let i = 0; i < 1000; i++) shuffledArray = shuffleArray(concattedArray);
    const splicedArray = shuffledArray.splice(0, validNumber);
    const arr = new Array(validNumber);
    for (let i = 0; i < arr.length; i++) arr[i] = splicedArray[createRandomIndex(0, getArrayIndiciesNum(splicedArray))];
    generatedPasswordEl.value = arr.join('');
    generatedPasswordDisplayLengthEl.innerText = `Your password length is: ${generatedPasswordEl.value.length.toString()}`;
    generatedPasswordDisplayLengthEl.style.display = "block";
  }
}
generateButtonEl.addEventListener("click", generatePassword);