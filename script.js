// Variables for different choices for password
var number = '0123456789';
var symbols = '!@#$%^&*?';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Users choice of length and variables
var userChoice = {}; 

// Used to determine the length of password
var length = parseInt(prompt("Please type in a number between 8 and 128"));

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Get user input
var numberQuestion = confirm('Do you want numbers? Click OK for yes, cancel for no')

var symbolQuestion = confirm('Do you want symbols? Click OK for yes, cancel for no')

var lowercaseQuestion = confirm('Do you want lowercase characters? Click OK for yes, cancel for no')

var uppercaseQuestion = confirm('Do you want uppercase characters? Click OK for yes, cancel for no')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);