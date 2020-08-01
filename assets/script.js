// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberVal = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialVal = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '+', '=']


function generatePassword() {
  console.log()
  var userSelection = []
  if (!confirm("Would you like to change your password?")) {
    alert("Have a great day!")
    return ''
  }
  var length = prompt("How long would you like your password to be?")
  if (length < 8 || length > 128) {
    alert("Passsword length must be atleast 8 characters and less than 128 characters.")
     return ""
  }
  if (confirm("Do you want to use uppercase letters?")) {
    userSelection.push(upperCase)
  }
  if (confirm("Do you want to use lowercase letters?")) {
    userSelection.push(lowerCase)
  }
  if (confirm("Do you want to use numbers?")) {
    userSelection.push(numberVal)
  }

  if(confirm("Do you want to use symbols?")) {
    userSelection.push(specialVal)
  }
  
  var password = ""
 for(var i = 0; i < length; i++){
   var randomArr = Math.floor(Math.random() * userSelection.length);
   var randomCharacterNum = Math.floor(Math.random() * userSelection[randomArr].length);
   var randomCharacter = userSelection[randomArr][randomCharacterNum]
   console.log(randomArr, randomCharacterNum, randomCharacter)
   password =password + randomCharacter
    }
console.log(password)
return password
}


// Write password to the #password input
function writePassword() {
  console.log('test')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



//    console.log(lowerCase, upperCase, numberVal, specialVal)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
