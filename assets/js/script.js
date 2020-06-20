// Assignment Code
// WHEN I click the button to generate a password
//DONE    * on the click open a prompt for the user to input something GOT IT
//DONE    * have a prompt ask user to input the password length of 8-128 characters GOT IT
//DONE    * have the number entered in the prompt display the choice they made GOT IT
//DONE    * write a password to the text area, anything will do for now GOT IT
//DONE    * make special arrays for 26 english letters, numbers 0-9, and special characters ~!@#$%^&*()_+ GOT IT
//DONE    * create more conditional statements to guide the user through choosing true or false do they want to have uppercase, lowercase, special, characters, numbers, USER MUST CHOOSE ONE OR IT STARTS OVER TO BEGINNING OF CHOICES
//DONE    * make the functions which pulls characters from the arrays of 26 english letters, numbers 0-9, and special characters and shuffles them
//    * make function that returns the value of the password length that the user wants use this in the conditional statement
//    * call up an array, shuffle it, cut or expand the length of the array to the RETURNED VALUE OF THE FUNCTION that the user entered a number between 8-128 for   
//    * make password = (result of all the choices that came from picking the user typing the character amount 
//    


var generateBtn = document.querySelector("#generate");

//characters stored in this array are referred to by its index number VALUE 8 is at index[0]
var passLengthArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"]



var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialCharArray = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

var numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var populatedArrayResult = ["this will be the shuffled array from selected criteria"]

//SHUFFLE FUNCTION
//PULL FROM AN ARRAY FUNCTION



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
//initializing this here just in case.
var anyArray = Array(6).fill(1);
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
  //debugger;
     
    while (restart = true){
      var passLengthCriteria = window.prompt(
      "enter how many characters you want your password to be: enter any number between 8-128"
      );
        searchIntegerInArray (passLengthCriteria, passLengthArray);
        //verifying if the function is true that user picked a number in the array
        var x = searchIntegerInArray(passLengthCriteria, passLengthArray);
        //another function returning the value of the integer GOES HERE!!! PLACE IT IN THE CONDITIOINAL BELOW!!
        if(x === true /* && */
          //number > 8 &&
          //number <= 128
          ){//yes function is true, user entered a number in the array AND number > 8 && number <= 128
          console.log("a " + x + " password generation process will begin!");
          restart = false;//the if condition is true so restart is false!!
          break;//break out of the while loop! we chose a password length number!
        } else {//condition is false so restart will be true the user entered a number not in the array
          window.alert("number needs to be between 8-128!!");
          restart = true;
        }
    }
        console.log("user entered a choice of password length of: " + passLengthCriteria);
      //ask user to choose upper case letters true or false
      var userChooseUpperCase = window.confirm(
        "Do you want uppercase letters in your password?"
      );
        if(userChooseUpperCase === true){
          console.log("user UpperCase: " + true);
         //call the array up
         console.log(upperCaseArray); 
         //shuffle the array
         shuffleArray(upperCaseArray);
         console.log(shuffleArray(upperCaseArray));
         //cut the length of the array by the password length the user chose

         //create new name for the array to store the returned value of shuffled array
         putshithere = shuffleArray(upperCaseArray);
         //store the new array in another variable putshithere
         
          console.log("push it here array\n" + putshithere);
        } else {
          console.log("user UpperCase: " + false);
        }
      //ask user to choose upper case letters true or false
      var userChooseLowerCase = window.confirm(
        "Do you want lowercase letters in your password?"
      );
        if(userChooseLowerCase === true){
          console.log("user LowerCase: " + true);
          
          console.log("push it here array\n" + putshithere);
        } else {
          console.log("user LowerCase: " + false);
        }

      var userChooseSpecialChar = window.confirm(
        "Do you want special characters in your password?"
      );
        if(userChooseSpecialChar === true){
          console.log("user SpecialChar: " + true);
        } else {
          console.log("user SpecialChar " + false);  
        }

      var userChooseNumberChar = window.confirm(
        "Do you want numbers in your password?"
      );
        if(userChooseNumberChar === true){
          console.log("user NumberChar: " + true);
        } else {
          console.log("user NumberChar " + false); 
        }


      
  console.log("generating password..")
  //password will contain the result of the random shuffling of the password which contains all of whatever criteria the user confirmed they wanted for their password to be
  console.log("declaring the value of the variable `password` as the function generatePassword() brought me here...")
  //return this value as the result of generating the password here is the end of the function
  password = populatedArrayResult;
  console.log("the string value of the new password pulled from an array is " + password);
  return password;

}
        
        generateBtn.addEventListener("click", writePassword);
        
        // Write password to the #password input
        function writePassword(){
          // setting value of the password to the function generatePassword();
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
          
          passwordText.value = password;
          
};//end of writePassword() function expression

// Add event listener to generate button
