// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = Number(prompt("How long would you like your password be?"));
var lowerCase = confirm("Do you want to use lowercase letters?");
var upperCase = confirm("Do you want to use uppercase letters?");
var numbers = confirm("Do you want to use numbers?");
var characters = confirm("Do you want to use special characters?");



while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 100) {
  alert("Password length must be 8-100 characters.");
  passwordLength = Number(prompt("How long would you like you're password to be?"));
}

while (!lowerCase && !upperCase && !numbers && !characters) {
  alert("You have to choose at least one type.");
  lowerCase = confirm("Do you want to use lowercase letters?");
  upperCase = confirm("Do you want to use uppercase letters?");
  numbers = confirm("Do you want to use numbers?");
  characters = confirm("Do you want to use special characters?");
  } 

// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Functions
var randomFunction = {
  lowercase: getLowerCase,
  uppercase: getUpperCase,
  number: getRandomNumber,
  character: getRandomCharacter
};

function getLowerCase() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUpperCase() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  const numbers = "0123456789"
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomCharacter() {
  const characters = "~!@#$%^&*()_+{}?/[]\/";
  return characters[Math.floor(Math.random() * characters.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
