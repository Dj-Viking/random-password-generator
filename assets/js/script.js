// Assignment Code
// WHEN I click the button to generate a password
//DONE    * on the click open a prompt for the user to input something GOT IT
//DONE    * have a prompt ask user to input the password length of 8-128 characters GOT IT
//DONE    * have the number entered in the prompt display the choice they made GOT IT
//DONE    * write a password to the text area, anything will do for now GOT IT
//DONE    * make special arrays for 26 english letters, numbers 0-9, and special characters ~!@#$%^&*()_+ GOT IT
//DONE    * create more conditional statements to guide the user through choosing true or false do they want to have uppercase, lowercase, special, characters, numbers, USER MUST CHOOSE ONE OR IT STARTS OVER TO BEGINNING OF CHOICES
//DONE    * make the functions which pulls characters from the arrays of 26 english letters, numbers 0-9, and special characters and shuffles them
//DONE    * make function that returns the value of the password length that the user wants use this in the conditional statement
//    * call up an array, shuffle it, cut or expand the length of the array to the RETURNED VALUE OF THE FUNCTION that the user entered a number between 8-128 for   
//    * make password = (result of all the choices that came from picking the user typing the character amount 
//    


var generateBtn = document.querySelector("#generate");

//characters stored in this array are referred to by its index number VALUE 8 is at index[0]
var passLengthArray = [
  "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", 
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", 
  "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", 
  "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", 
  "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", 
  "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", 
  "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", 
  "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", 
  "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", 
  "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", 
  "126", "127", "128"]



var upperCaseArray = [
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseArray = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialCharArray = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

var numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var populatedArrayResult = ["this will be the shuffled array from selected criteria"]

//UPPERCASE GENERATOR
var charA = "A";
var charZ = "Z";
//generate the alphabet uppercase 
function genUpperCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
  //return the array 
    return a;
}

//lowercase generator
var chara = "a";
var charz = "a";
//generate the alphabet uppercase 
function genLowerCharArray(chara, charz) {
    var a = [], i = chara.charCodeAt(0), j = charz.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
  //return the array 
    return a;
}
//console.log(genCharArray(charA, charZ));

/**************************************************************** */
/*****************PASSWORD MODIFIER FUNCTIONS START!!!****************** */
/**************************************************************** */
var myArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//var array = Array(6).concat(myArray);
//console.log(array);
var addToArray = [];
//uppercasechoice modifier first
//var criteria = 0;
//THIS IS CURRENTLY SET UP FOR THE CAPITAL LETTER SECTION!!
var myUpperPassLengthModifier = function(myArray, passLengthCriteria){
  
  //var passLengthCriteria = window.prompt(//this is done at the beginning carrying the value over
      //"enter how many characters you want your password to be: enter any number between 8-128"
      //);
    var myArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var addToArray = genUpperCharArray(charA, charZ);
    var modifiedArray = myArray.concat(addToArray);
    if(passLengthCriteria >= 26 && //if user chooses more than 26 letters
      passLengthCriteria <= 128){
      //generate new array of capital letters to concat
      addToArray = genUpperCharArray(charA, charZ);
      modifiedArray = myArray.concat(addToArray);
      //shuffle array
      shuffleArray(addToArray);
      console.log("shuffling array that im concatting to myArray");
      console.log(addToArray);
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      modifiedArray.length = passLengthCriteria;
      console.log("here is your new array \n" + modifiedArray);
      return modifiedArray;
    } else if(passLengthCriteria >=8 &&//user chooses password length of more than 8 but less than 26
              passLengthCriteria <=25) {
              shuffleArray(modifiedArray);
              modifiedArray.length = passLengthCriteria;
              shuffleArray(modifiedArray);         
              console.log("here is your new array \n" + modifiedArray);
              return modifiedArray;
    } else { 
      
    }
                                             
}
//stored the returned capital letter array into a newly declared variable
//var newModifiedArrayUpperCase = myPassLengthModifier(myArray, passLengthCriteria);
//HERE IS THE LOWER CASE CONCATTER AND SCRAMBLER
var myLowerPassLengthModifier = function(myArray, passLengthCriteria){
  
  //var passLengthCriteria = window.prompt(//this is done at the beginning carrying the value over
      //"enter how many characters you want your password to be: enter any number between 8-128"
      //);

    //lowercase scrambler
    lowerarray =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log(myArray);
    var modifiedArray = myArray.concat(lowerarray);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    console.log("shuffled lowercase array");
    console.log(modifiedArray);
    if(passLengthCriteria >= 26 && //if user chooses more than 26 letters
      passLengthCriteria <= 128){
      //generate new array of capital letters to concat
      modifiedArray = myArray.concat(lowerarray);
      //shuffle array
      shuffleArray(modifiedArray);
      console.log("shuffling array that im concatting to lowerarray");
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      console.log(modifiedArray);
      modifiedArray.length = passLengthCriteria;
      console.log("here is your new array \n" + modifiedArray);
      return modifiedArray;
    } else if(passLengthCriteria >=8 &&//user chooses password length of more than 8 but less than 26
              passLengthCriteria <=25) {
              modifiedArray = myArray.concat(lowerarray);
              //shuffle array
              shuffleArray(modifiedArray);
              console.log("shuffling array that im concatting to lowerarray");
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              modifiedArray.length = passLengthCriteria;
              shuffleArray(modifiedArray);         
              console.log("here is your new array \n" + modifiedArray);
              return modifiedArray;
    } else { 
      
    }
                                             
}

var mySpecialCharLengthModifier = function(myArray, passLengthCriteria){
  
  //var passLengthCriteria = window.prompt(//this is done at the beginning carrying the value over
      //"enter how many characters you want your password to be: enter any number between 8-128"
      //);

    //specialchar scrambler
    specialCharTemp =["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
    console.log(myArray);
    var modifiedArray = myArray.concat(specialCharTemp);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    shuffleArray(modifiedArray);
    console.log("shuffled special character array");
    console.log(modifiedArray);
    if(passLengthCriteria >= 26 && //if user chooses more than 26 letters
      passLengthCriteria <= 128){//and the number is lessthan or equal to 128
      //generate new array of capital letters to concat
      modifiedArray = myArray.concat(specialCharTemp);
      //shuffle array
      shuffleArray(modifiedArray);
      console.log("shuffling array that im concatting to lowerarray");
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      shuffleArray(modifiedArray);
      console.log(modifiedArray);
      modifiedArray.length = passLengthCriteria;
      console.log("here is your new array \n" + modifiedArray);
      return modifiedArray;
    } else if(passLengthCriteria >=8 &&//user chooses password length of more than 8 but less than 26
              passLengthCriteria <=25) {
              modifiedArray = myArray.concat(specialCharTemp);
              //shuffle array
              shuffleArray(modifiedArray);
              console.log("shuffling array that im concatting to lowerarray");
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              shuffleArray(modifiedArray);
              modifiedArray.length = passLengthCriteria;
              shuffleArray(modifiedArray);         
              console.log("here is your new array \n" + modifiedArray);
              return modifiedArray;
    } else { 
      
    }
                                             
}

/**************************************************************** */
/*****************PASSWORD MODIFIER FUNCTIONS END!!!************** */
/**************************************************************** */



//initializing an important variable!!! maybe dont need to initialize...
//var passLengthCriteria = 0;
function searchIntegerInArray (passLengthCriteria, passLengthArray) {
  //parse the prompt input into an integer before searching in the loop!
  parseInt(passLengthCriteria);
  //create the variable for the string converted to an integer
  //to be stored. int now contains the integer parsed from passLengthCriteria string "8" through "128"
  var int = passLengthCriteria;
  for (var j=0; j<passLengthArray.length; j++) {
      // searching for the integer that is converted from a string before entering the loop!
      if (passLengthArray.includes(int))
        return true;//the integer is in the array
  }
  return false;//integer is not in the array
}
function searchIntegerInArrayReturnInt (passLengthCriteria, passLengthArray) {
  //parse the prompt input into an integer before searching in the loop!
  parseInt(passLengthCriteria);
  //create the variable for the string converted to an integer
  //to be stored. int now contains the integer parsed from passLengthCriteria string "8" through "128"
  var int = passLengthCriteria;
  for (var j=0; j<passLengthArray.length; j++) {
      // searching for the integer that is converted from a string before entering the loop!
      if (passLengthArray.includes(int))
        return int;//the integer is in the array
  }
  return false;//integer is not in the array
}
//initializing this here just in case.
//var anyArray = Array(6).fill(1);
//SHUFFLE FUNCTION DONE
//can place an array of your choice to shuffle just replace the anyArray parameter with
//any array that you want to shuffle
function shuffleArray(anyArray) {
  for (var i = anyArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = anyArray[i];
      anyArray[i] = anyArray[j];
      anyArray[j] = temp;
  }
  return anyArray;
  //console.log(myArray);
  //console.log(numberArray.map(String));
}

//var passLengthArray = 
//[
  //index 0 will determine password is 8 characters long
  //"8",//function here that can pull numbers, characters from english alphabet, and select special symbols and arrange them all randomly somehow using a random string generator pulling numbers, letters, and special characters
  //index 1 pass is 9 characters long
  //"9",
  //index 2 pass is 10 characters long
  //create function inside this passlengtharray index value that arranges characters which are placed into this passlengtharray index
  //"10", 
  
  
//]

//characters stored in this array are referred to by its object index string
//example referencing the string stored in the object name index0 the reference is like this passLengthArrayObj[0].index0
//referencing strings from a regular array are referenced by index number array[0]
//define and declare the function generatePassword();
var generatePassword = function(){
  debugger;
     
    while (restart = true){
      var passLengthCriteria = window.prompt(
      "enter how many characters you want your password to be: enter any number between 8-128"
      );
        searchIntegerInArray (passLengthCriteria, passLengthArray);
        //verifying if the function is true that user picked a number in the array
        var x = searchIntegerInArray(passLengthCriteria, passLengthArray);
        var integer = searchIntegerInArrayReturnInt (passLengthCriteria, passLengthArray)
        //another function returning the value of the integer GOES HERE!!! PLACE IT IN THE CONDITIOINAL BELOW!!
        if(x === true  && 
          integer >= 8 &&
          integer <= 128){
          //yes function is true, user entered a number in the array AND number > 8 && number <= 128
          console.log("a " + x + " password generation process will begin!");
          console.log("Password length: " + integer);
          restart = false;//the if condition is true so restart is false!!
          break;//break out of the while loop! we chose a password length number! otherwise you will stay in the while loop!!
        } else { x === false  //condition is false so restart will be true the user entered a number not in the array
          window.alert("number needs to be a whole number integer between 8-128!!");
          restart = true;
        
        }
    }   
        console.log("user entered a choice of password length of: " + passLengthCriteria);
      //ask user to choose upper case letters true or false
      var userChooseUpperCase = window.confirm(
        "Do you want uppercase letters in your password?"
      );
        if(userChooseUpperCase === true){
          console.log("user UpperCase: " + userChooseUpperCase);//true chose uppercase
          //PUT IN MODIFIER FUNCTION HERE
          myUpperPassLengthModifier(upperCaseArray, passLengthCriteria);
          var newModifiedArrayUpperCase = myUpperPassLengthModifier(upperCaseArray, passLengthCriteria);
          console.log("here is the new array\n" + newModifiedArrayUpperCase);
          } else {
            console.log("user UpperCase: " + userChooseUpperCase);//false didn't choose uppercase
          }
      //ask user to choose upper case letters true or false
      var userChooseLowerCase = window.confirm(
        "Do you want lowercase letters in your password?"
      );
        if(userChooseLowerCase === true){
          console.log("user LowerCase: " + userChooseLowerCase);//true
          //start adding lowercase letters and scramble into the uppercasearray
          //pass newmodified into here
          myLowerPassLengthModifier(newModifiedArrayUpperCase, passLengthCriteria);
          var newModifiedArrayLowerCase = myLowerPassLengthModifier(newModifiedArrayUpperCase, passLengthCriteria);
          var testoutput = newModifiedArrayLowerCase;
          console.log("here is the new array\n" + newModifiedArrayLowerCase);
        } else {
          console.log("user LowerCase: " + userChooseLowerCase);//false
        }
        
      var userChooseSpecialChar = window.confirm(
        "Do you want special characters in your password?"
      );
        if(userChooseSpecialChar === true){
          console.log("user SpecialChar: " + userChooseSpecialChar);//true
        } else {
          console.log("user SpecialChar " + userChooseSpecialChar);//false  
        }

      var userChooseNumberChar = window.confirm(
        "Do you want numbers in your password?"
      );
        if(userChooseNumberChar === true){
          console.log("user NumberChar: " + userChooseNumberChar);//true
        } else {
          console.log("user NumberChar " + userChooseNumberChar);//false
        }


  //make a conditional if the user doesn't choose any criteria that the password does not get written
  //  
  console.log("generating password..")
  //password will contain the result of the random shuffling of the password which contains all of whatever criteria the user confirmed they wanted for their password to be
  console.log("declaring the value of the variable `password` as the function generatePassword() brought me here...")
  //return this value as the result of generating the password here is the end of the function
  //join the array together into a single string
  password = testoutput.join("");
  console.log("the string value of the new password pulled from an array is " + password);
  return password;

}
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  // Write password to the #password input
  function writePassword(){
    // setting value of the password to the function generatePassword();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
          
};//end of writePassword() function expression








