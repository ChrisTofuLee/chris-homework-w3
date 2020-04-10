// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "TODO: Implement password generator";
}

// Write password to the #password input
function writePassword() {
  console.log("Ive been called");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const passwordLength = prompt("please choose a password length of between 8 and 128")
const lowerCaseSelector = confirm("Password Criteria to include: lower case")
const upperCaseSelector = confirm("Password Criteria to include: upper case")
const numberSelector = confirm("Password Criteria to include: numbers")
const specialSelector = confirm("Password Criteria to include: special characters")

const criterias = [
  lowerCaseSelector, upperCaseSelector, numberSelector, specialSelector
];

for (let i = 0; i < 5; i++) {
  if (i == false) {
    alert("no criteria selected")
  }
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialChars = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":","\""]


if () {}
