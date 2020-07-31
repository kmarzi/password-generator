// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", myFunction);

function myFunction() {
  alert ("Would you like to change your password?");
  prompt("password needs to contain atleast 1 Uppercase letter,lowercase letter and a number.")
}

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("generate", writePassword);
