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
var passLengthArray = 
[
  //index 0 password is 8 characters long
  "8",//function here that can pull numbers, characters from english alphabet, and select special symbols and arrange them all randomly somehow using a random string generator pulling numbers, letters, and special characters
  //index 1 pass is 9 characters long
  "9",
  //index 2 pass is 10 characters long
  //create function inside this passlengtharray index value that arranges characters which are placed into this passlengtharray index
  "test 10",
  "here is 11"
]

//characters stored in this array are referred to by its object index string
//example referencing the string stored in the object name index0 the reference is like this passLengthArrayObj[0].index0
var passLengthArrayObj =
[
  {
    index0: "8"
  },
  {
    index1: "9"
  },
  {
    index2: "10"
  },
  {
    index3: "11"
  },
  {
    index4: "12"
  },
  {
    index5: "13"
  },
  {
    index6: "14"
  },
  {
    index7: "15"
  },
  {
    index8: "16"
  },
  {
    index9: "17"
  },
  {
    index10: "18"
  },
  {
    index11: "19"
  }
];
//define and declare the function generatePassword();
var generatePassword = function(){
  debugger;
  var passLengthCriteria = window.prompt(
    "enter how many characters you want your password to be: enter any number between 1-12"
    );
    console.log("user entered a choice of password length of: " + passLengthCriteria);
    switch(passLengthCriteria){
      //the numbers typed between 8-128 will represent the index number of the function I'm referencing that will generate the password with this character length
      case "1":
      case "2":
      case "3":
        window.alert(
          "you chose to have a password character length of " + passLengthArray[passLengthCriteria - 1]
          );
          console.log("you chose to have a password character length of " + passLengthArray[passLengthCriteria - 1]);
          
          break;
          default:
            window.alert("please choose a valid number criteria!");
            writePassword();
            break;
          }
          console.log("declaring the value of the variable `password` as the function generatePassword() brought me here...")
          window.alert("you generated a password! thanks!");
          password = passLengthArray[passLengthCriteria - 1];
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
