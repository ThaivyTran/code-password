// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max) // make into whole numbers
}

function getRandomItem(list) {
  return list[randomInt(list.length)] // random position in a list
}

function generatePassword() {

  var userInput = window.prompt("How long do you want the password?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.prompt("Error: That is not a number")
    return // cancels if password is a number
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

  var userOptions = []
  
  for (var i = 0; i < lowercaseList.length; i++) { // Loop so password(userInput) could go through the confirm messages
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

    if (userNumbers === true) {
      userOptions.push(numberList)
    }

    if (userSymbols === true){
      userOptions.push(symbolList)
    }

    if (userLowerCase === true){
      userOptions.push(lowercaseList)
    }

    if (userUpperCase === true) {
      userOptions.push(uppercaseList)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) { // 
      var randomList = getRandomItem(userOptions)
      var randomChar = getRandomItem(randomList)
      generatedPassword += randomChar
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
