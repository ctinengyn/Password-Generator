// Variables for different choices for password 'strings'
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','@','#','$','%','^','&','*','?'];
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Users choice of length and variables
var userChoice = {};

// Assignment Code
var generateBtn = document.querySelector("#generate");
// #generate button from html and css

// Used to determine the length of password
function length() {

  var userChoice = parseInt(window.prompt('How many characters do you want to be in your password?'));

  if (userChoice < 8 || userChoice > 128) {
      window.alert('Please type in a number between 8 and 128');
      return;
  } else if (isNaN(userChoice)) {
      window.alert('Please type a valid number');
      return;
  }
// Asking user to pick a number between 8 and 128
// If it's less than 8 (< 8) or greater than 128 (> 128) then a alert box will pop up
// Not a valid number (isNaN) will pop in return

// Get user input
  var numberQuestion = confirm('Do you want numbers? Click OK for yes, cancel for no');

  var symbolQuestion = confirm('Do you want symbols? Click OK for yes, cancel for no');

  var lowercaseQuestion = confirm('Do you want lowercase characters? Click OK for yes, cancel for no');

  var uppercaseQuestion = confirm('Do you want uppercase characters? Click OK for yes, cancel for no');


  if (numberQuestion === false && symbolQuestion === false && lowercaseQuestion === false && uppercaseQuestion === false) {
    window.alert('Please select at least one character type');
    return;
  }

  // Saving users input from prompt questions
  var passwordChoice = {
    userChoice: userChoice,
    numberQuestion: numberQuestion,
    symbolQuestion: symbolQuestion,
    lowercaseQuestion: lowercaseQuestion,
    uppercaseQuestion: uppercaseQuestion
  }
  return passwordChoice;
}
// If user picks numbers, symbols, lowercase letters or uppercase letters it will be in their new password

function generatePassword() {
  
  var userOption = length();
  console.log(userOption.userChoice);
  console.log(userOption.numberQuestion);
  console.log(userOption.symbolQuestion);
  console.log(userOption.lowercaseQuestion);
  console.log(userOption.uppercaseQuestion);
  
  // 2 empty arrays that hold the values for password
  var randomPassword = [];
  var finalPassword = [];

 // arrays that will generate at least 1 number, symbol, lowercase or/and uppercase
  if (userOption.numberQuestion) {
    randomPassword.push(...numbers);
  }
  if (userOption.symbolQuestion) {
    randomPassword.push(...symbols);
  }
  if (userOption.lowercaseQuestion) {
    randomPassword.push(...lowercaseLetters);
  }
  if (userOption.uppercaseQuestion) {
    randomPassword.push(...uppercaseLetters);
  }

  // Loops: If statement 0 returns true, the loop will start over, if it returns false, the loop will end
  for (var i = 0; i < userOption.userChoice; i++) {
    var newCharacters = random(randomPassword);
    finalPassword = finalPassword + newCharacters; 
  };
    return finalPassword;
}; 
 
function random(characterType) {
  var randomIndex = Math.floor(Math.random() * characterType.length);
  var randomElement = characterType[randomIndex];
  console.log(randomIndex);
  console.log(randomElement);
  return randomElement;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);