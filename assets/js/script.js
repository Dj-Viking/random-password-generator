// Assignment Code
// WHEN I click the button to generate a password
//    * on the click open a prompt for the user to input something GOT IT
//    * have a prompt ask user to input the password length of 8-128 characters GOT IT
//    * have the number entered in the prompt display the choice they made GOT IT
//    * write a password to the text area, anything will do for now GOT IT
//    * until i figure out how to return the result of the random arrangement array functions that will create a random arrangement of characters just keep writing some dummy string to the textarea
//    * inside the password length array, have an array of functions that create some random password inside the passwordlengtharray array
//    * make special arrays for 26 english letters, numbers 0-9, and special characters ~!@#$%^&*()_+
//    * make the functions inside an array which pulls characters from the arrays of 26 english letters, numbers 0-9, special characters: ~!@#$%^&*()
//    * these functions are numbered as the 8-128 character length for a password to write 
//    * make password = (result of all the choices that came from picking the user typing the character amount


var generateBtn = document.querySelector("#generate");

//characters stored in this array are referred to by its index number VALUE
var passLengthArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]

// function searchStringInArray (str, passLengthArray) {
//   for (var j=0; j<passLengthArray.length; j++) {
//       if (passLengthArray[j].match(str)) return true;
//   }
//   return false;
// }

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialCharArray = [ '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

var numberCharArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

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
  var passLengthCriteria = window.prompt(
    "enter how many characters you want your password to be: enter any number between 8-128"
    );
    console.log("user entered a choice of password length of: " + passLengthCriteria);
    switch(passLengthCriteria){
      //the numbers typed between 8-128 will represent the index number of the function I'm referencing that will generate the password with this character length
      //change into a search through the array for a matching string and then write this string
      case "8":
      case "9":
      case "10":
        window.alert(
          "you chose to have a password character length of " + passLengthArray[passLengthCriteria - 8]
          );
          console.log("you chose to have a password character length of " + passLengthArray[passLengthCriteria - 8]);
          
          break;
      default:
        window.alert("please choose a valid number criteria!");
        writePassword();
        break;
    }
  console.log("declaring the value of the variable `password` as the function generatePassword() brought me here...")
  window.alert("you generated a password! thanks!");
  //password will contain the result of the random shuffling of the password which contains all of whatever criteria the user confirmed they wanted for their password to be
  password = passLengthArray[passLengthCriteria - 8];
  console.log("the string value of the new password pulled from an array is " + password);
  //return this value as the result of generating the password here is the end of the function
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
