// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", myFunction);

function myFunction() {
  confirm("Would you like to change your password?");
  confirm("Do you want to use letters?")
  confirm("Do you want to use numbers?")
  confirm("Do you want to use symbols?")

  passwordLength = confirm"Password must contain atleast 8 characters.")
    if (passwordLength < 8);
    confirm("Password must contain atleast 8 characters!")
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 var numberVal =['1','2','3','4','5','6','7','8','9','0']
 var specialVal =['~','!','@','#','$','%','^','&','*','+','=']


// Add event listener to generate button
generateBtn.addEventListener("generate", writePassword);
