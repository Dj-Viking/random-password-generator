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
const copyButtonEl = document.querySelector("#copy-button");
const tooltipEl = document.querySelector("#tooltip");
copyButtonEl.style.display = "none";
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
  tooltipEl.innerText = "Copy to Clipboard";
});

function generatePassword(event) 
{
  event.preventDefault();
  copyButtonEl.style.display = "block";
  //getting the values when the form is submitted and not when the document renders
  const passLength = Number(document.getElementById('passlength').value);
  const uppercaseCheck = document.getElementById('uppercase').checked;
  const lowercaseCheck = document.getElementById('lowercase').checked;
  const numbersCheck = document.getElementById('numbers').checked;
  const symbolsCheck = document.getElementById('symbols').checked;

  //and operator to check if the && expression evaluates true then yield the string value next to it for that index
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
    generatedPasswordEl.value = createPasswordText(
                                                   passLength, 
                                                   scrambleArraysAndSplice(
                                                                           passLength, 
                                                                           chooseArrays(checkedArrayTypes)));

    setPassLengthText(generatedPasswordDisplayLengthEl, generatedPasswordEl);
  }
}
generateButtonEl.addEventListener("click", generatePassword);
copyButtonEl.addEventListener("click", () => {
  const data = [
    new ClipboardItem({ 
      "text/plain": new Blob([generatedPasswordEl.value], { type: "text/plain" }) 
    })
  ];
  navigator.clipboard.write(data).then(function() {
    tooltipEl.innerText = "Copied to Clipboard! ✨" //if successful
  }, function() {
    tooltipEl.innerText = "Unable to write to clipboard. :-("; //if error
  });
});