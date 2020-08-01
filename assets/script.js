// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", myFunction);

function myFunction() {
  confirm("Would you like to change your password?");
  confirm("Do you want to use letters?")
  confirm("Do you want to use numbers?")
  confirm("Do you want to use symbols?")

  var passwordLength = confirm("Must contain atleast 8 characters.")
    if (passwordLength < 8 || passwordLength > 128){
      alert("password must be atleast 8 characters.")
      passwordLength = 0
    }
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 var passswordCharacters
 

 var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 var numberVal =['1','2','3','4','5','6','7','8','9','0']
 var specialVal =['~','!','@','#','$','%','^','&','*','+','=']

   console.log(lowerCase, upperCase, numberVal, specialVal)

 for(var i = 0; i < passwordLength; i++){
   var randomUpper = Math.floor(Math.random() * lowerCase.length);
   var randomLower = Math.floor(Math.random() * upperCase.length);
   var randomNumber = Math.floor(Math.random() * numberVal.length);
   var randomSpecial = Math.floor(Math.random() * specialVal.length);
    }
 


// Add event listener to generate button
generateBtn.addEventListener("generate", writePassword);
