// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

function generatePassword() {

  var userInput = window.prompt("How long do you want the password?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.prompt("Error: That is not a number")
    return // cancels if password is a number
  }

  if (passwordLength < 8 || passwordLegnth > 128) { // password length 8 - 128
    window.prompt("Password length must be between 8 - 128 characters")
    return
  }

  var userNumbers = window.confirm("Do you want number?") // confirm numbers
  var userSymbols = window.confirm("Do you want symbols?") // confirm symbols
  var userLowerCase = window.confirm("Do you want lower case letters?") // confirm lowercase
  var userUpperCase = window.confirm("Do you want upper case letters?") // cofirm uppercase

}

// function generatePassword(){
//   console.log("You clicked the button")

// // 1. Prompt the user for the password criteria
// //    a. Password Length 8<128
// //    b. Lowercase, uppercase, numbers, special characters
// // 2. Validate the input.
// // 3. Generate password based on criteria.Generate
// // 4. Display password to the page.
//   return "generated password"

// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
