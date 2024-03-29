// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max) // make decimals into whole numbers
}

function getRandomItem(list) {
  return list[randomInt(list.length)] // random position in a list
}

function generatePassword() {

  var userInput = window.prompt("How long do you want the password?") // Frist prompt will appear when button is clicked

  var passwordLength = parseInt(userInput) // Based on userInput that'll be the length

  if (isNaN(passwordLength)) { // cancels if password is a number
    window.prompt("Error: That is not a number")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) { // password length 8 - 128
    window.prompt("Password length must be between 8 - 128 characters")
    return
  }

  var userNumbers = window.confirm("Do you want number?") // confirm numbers
  var userSymbols = window.confirm("Do you want symbols?") // confirm symbols
  var userLowerCase = window.confirm("Do you want lower case letters?") // confirm lowercase
  var userUpperCase = window.confirm("Do you want upper case letters?") // confirm uppercase
// arrays with numbers, symbols, lowercase, uppercase
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var userOptions = [] // variable for user password options
  
  for (var i = 0; i < lowercaseList.length; i++){ // Loop so password(userInput) could go through the confirm messages
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

    if (userNumbers === true){
      userOptions.push(numberList)
    }

    if (userSymbols === true){
      userOptions.push(symbolList)
    }

    if (userLowerCase === true){
      userOptions.push(lowercaseList)
    }

    if (userUpperCase === true){
      userOptions.push(uppercaseList)
    }

    if (userOptions.length === 0){ //if the list is empty will push lower case by default
      userOptions.push(lowercaseList)
    }

    var generatedPassword = "" // generatedPassword is defined

    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomItem(userOptions)
      var randomChar = getRandomItem(randomList)
      generatedPassword += randomChar // Prints random characters given the length
    }
    return generatedPassword // Password will be generated into the webpage when returned
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
