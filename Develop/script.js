// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = Number(prompt("How long would you like your password be?"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 120) {
  alert("Password length must be 8-100 characters.");
  passwordLength = Number(prompt("How long would you like you're password to be?"));
}

function generatePassword() {
  var pass = "";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";

  for (var i = 1; i <= passwordLength; i++) {
    var char = Math.floor(Math.random() * letters.length + 1);
    pass += letters.charAt(char)
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
