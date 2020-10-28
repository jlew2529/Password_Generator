// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = Number(prompt("How long would you like your password be?"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 120) {
  alert("You must input a number and the password length must be 8-100 characters.");
  passwordLength = Number(prompt("How long would you like you're password to be?"));
}

var upperCase = confirm("Do you want to use uppercase letters?");
var lowerCase = confirm("Do you want to use lowercase letters?");
var number = confirm("Do you want to use numbers?");
var symbol = confirm("Do you want to use special characters?");

while (!upperCase && !lowerCase && !number && !symbol) {
  alert("You have to choose at least one type.");
  upperCase = confirm("Do you want to use uppercase letters?");
  lowerCase = confirm("Do you want to use lowercase letters?");
  number = confirm("Do you want to use numbers?");
  symbol = confirm("Do you want to use special characters?");
}

// Generates the password based off of the users inputs
function generatePassword() {
  var pass = "";
  var lLetters = "abcdefghijklmnopqrstuvwxyz";
  var uLetters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "~!@#$%^&*()_+=-<>";
  var onlyLetters = lLetters + uLetters;
  var numsSyms = numbers + symbols;
  var all = lLetters + uLetters + numbers + symbols;
  var upsNums = uLetters + numbers;
  var upsSyms = uLetters + symbols;
  var lowNums = lLetters + numbers;
  var lowSyms = lLetters + symbols;
  var upsNumsSyms = uLetters + numbers + symbols;
  var lowNumsSyms = lLetters + numbers + symbols;
  var upsLowNums = uLetters + lLetters + numbers;
  var upsLowSyms = uLetters + lLetters + symbols;

  if (upperCase === true && lowerCase === true && number === true && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * all.length);
      pass += all.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === false && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * onlyLetters.length);
      pass += onlyLetters.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === true && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * upsNums.length);
      pass += upsNums.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === false && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * upsSyms.length);
      pass += upsSyms.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === false && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * uLetters.length);
      pass += uLetters.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === false && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * lLetters.length);
      pass += lLetters.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === true && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * lowNums.length);
      pass += lowNums.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === false && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * lowSyms.length);
      pass += lowSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === true && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * numsSyms.length);
      pass += numsSyms.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === false && number === true && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * upsNumsSyms.length);
      pass += upsNumsSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === true && number === true && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * lowNumsSyms.length);
      pass += lowNumsSyms.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === true && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * numbers.length);
      pass += numbers.charAt(char)
    }
  }

  if (upperCase === false && lowerCase === false && number === false && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * symbols.length);
      pass += symbols.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === true && symbol === false) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * upsLowNums.length);
      pass += upsLowNums.charAt(char)
    }
  }

  if (upperCase === true && lowerCase === true && number === false && symbol === true) {
    for (var i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random() * upsLowSyms.length);
      pass += upsLowSyms.charAt(char)
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
