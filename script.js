// Variables for different choices for password 'strings'
var number = '0123456789';
var symbols = '!@#$%^&*?';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Users choice of length and variables
var userChoice = {}; 

// Assignment Code
var generateBtn = document.querySelector("#generate");
// #generate button from html and css 

var length = parseInt(prompt('How many characters do you want to be in your password?'))

if (length < 8) {
  prompt('How many characters do you want to be in your password?');

  }else if (length > 8); {

}

// Used to determine the length of password
function length() {

  var userChoice = parseInt(prompt('How many characters do you want to be in your password?'));

  var (userChoice < 8 || userChoice > 128) {
    alert('Please type in a number between 8 and 128');

    return;
  } else if (isNaN(characters)) {
    alert('Please type a valid number')
    return;

}
// Asking user to pick a number between 8 and 128
// If it's less than 8 (< 8) or greater than 128 (> 128) then a alert box will pop up
// Not a valid number (isNaN) will pop in return

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