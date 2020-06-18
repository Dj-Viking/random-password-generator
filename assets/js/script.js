// Assignment Code
// WHEN I click the button to generate a password
//    * on the click open a prompt for the user to input something GOT IT
//    * have a prompt ask user to input the password length of 1
//    * have the number entered in the prompt display the choice they made
//    * write a password to the text area
//    * make password = (result of all the choices that came from picking the user typing the character amount





var generateBtn = document.querySelector("#generate");

var passLengthArray =
[
  {
    index0: "1"
  },
  {
    index1: "2"
  },
  {
    index2: "3"
  },
  {
    index3: "4"
  },
  {
    index4: "5"
  },
  {
    index5: "6"
  },
  {
    index6: "7"
  },
  {
    index7: "8"
  },
  {
    index8: "9"
  },
  {
    index9: "10"
  },
  {
    index10: "11"
  },
  {
    index11: "12"
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
      case "1":
        window.alert(
          "you chose to have a password character length of " + passLengthArray[0].index0
          );
          console.log("you chose to have a password character length of " + passLengthArray[0].index0);
          
          break;
          default:
            window.alert("please choose a valid number criteria!");
            writePassword();
            break;
          }
          console.log("declaring the value of the variable `password` as the function generatePassword() brought me here...")
          window.alert("you generated a password! thanks!");
          password = "here is a password";
          console.log(password);
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
