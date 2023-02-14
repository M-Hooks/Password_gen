// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
}
// Loop if answer is outside the parameters 
while (confirmLength <= 7 || confirmLength >= 49) {
  alert("Password length must be between 8-50 characters Try again");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
}


alert(`Your password will have ${confirmLength} characters`);

//  parameters of password 
var confirmSpecialCharacter = confirm("confrimfor special characters");
var confirmNumericCharacter = confirm("confirm for numeric characters");
var confirmLowerCase = confirm("confirm for lowercase characters ");
var confirmUpperCase = confirm("confirm for uppercase characters");
while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
  alert("choose at least one parameter");
  var confirmSpecialCharacter = confirm("confirm to include special characters");
  var confirmNumericCharacter = confirm("confirm to include numeric characters");
  var confirmLowerCase = confirm("confirm to include lowercase characters");
  var confirmUpperCase = confirm("confirm to include uppercase characters");

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
