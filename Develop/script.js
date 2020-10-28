// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = Number(prompt("How long would you like your password be?"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 120) {
  alert("You must input a number and the password length must be 8-100 characters.");
  passwordLength = Number(prompt("How long would you like you're password to be?"));
}

var lowerCase = confirm("Do you want to use lowercase letters?");

while (!lowerCase) {
  alert("You have to choose at least one type.");
  lowerCase = confirm("Do you want to use lowercase letters?");
}

function generatePassword() {
  var pass = "";
  var lLetters = "abcdefghijklmnopqrstuvwxyz";
  var uLetters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  if (lowerCase === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * lLetters.length + 1);
      pass += lLetters.charAt(char)
    }
  }
  
  if (upperCase === true && lowerCase === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * uLetters.length + 1);
      pass += uLetters.charAt(char)
    }
  }

  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
