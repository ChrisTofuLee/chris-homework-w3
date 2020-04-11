/*/ Assignment Code
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


//prompts
const passwordLength = prompt("please enter length of password between 8 and 128")
const lowerCaseSelector = confirm("Password Criteria to include: lower case")
const upperCaseSelector = confirm("Password Criteria to include: upper case")
const numberSelector = confirm("Password Criteria to include: numbers")
const specialSelector = confirm("Password Criteria to include: special characters")

//password length
function writePassword() {
  let passwordLength = 0

    const passwordLength = prompt("please enter length of password between 8 and 128");
    const passLenInt = parseInt(passwordLength);
    
    if (passwordLength > 8 && passwordLength < 128) {
     
    }else {
      const passwordLength = prompt ("Outside of suggested length, please choose between 8 and 128 (last attempt)")
      
    }
}

const passwordLength = prompt("please enter length of password between 8 and 128");
const passLenInt = parseInt(passwordLength);
    
    if (passwordLength > 8 && passwordLength < 128) {
     
    }else {
      const passwordLength = prompt ("Outside of suggested length, please choose between 8 and 128 (last attempt)")
      
    }
  }
  const lowerCaseSelector = confirm("Password Criteria to include: lower case")
  const upperCaseSelector = confirm("Password Criteria to include: upper case")
  const numberSelector = confirm("Password Criteria to include: numbers")
  const specialSelector = confirm("Password Criteria to include: special characters")
*/
//-----------------------------------------------------------



var generateBtn = document.querySelector("#generate");
let criteria = [];

generateBtn.addEventListener("click", writePassword);


function writePassword() {
  const passwordLength = prompt("please enter length of password between 8 and 128");
  const passLenInt = parseInt(passwordLength);
    
    if (passwordLength >= 8 && passwordLength <= 129) {
     
    }else {
      alert("Outside of suggested length, please start again and enter a number between 8 and 128")
            
    }
    if (passwordLength >= 8 && passwordLength <= 128) {
    const lowerCaseSelector = confirm("Password Criteria to include: lower case")
    const upperCaseSelector = confirm("Password Criteria to include: upper case")
    const numberSelector = confirm("Password Criteria to include: numbers")
    const specialSelector = confirm("Password Criteria to include: special characters")
    
    let criteria = [lowerCaseSelector, upperCaseSelector, numberSelector, specialSelector];
    let falseCount = 0
    for (let i = 0; i < 4; i++) {
      if (criteria[i] == false) {
        falseCount++
      }
      if (falseCount == 4) {
        alert("no criteria selected, please start again and select minimum one criteria")
      }
    }
}
}



//---------------------------------------------------
/*
//password length
function lengthIdentifier() {
  const passwordLength = prompt("please enter length of password between 8 and 128")
}
if (passwordLength < 8 || passwordLength > 128) {
  const passwordLengthRetry = prompt ("Outside of suggested length, please choose between 8 and 128")
}



//password criteria
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



let counter = 0;

const counterSpan = document.getElementById("s1")

const decrementButton = document.getElementById("decrement")
const incrementButton = document.getElementById("increment")
                                        // this is now the function label
decrementButton.addEventListener("click", decrement);
decrementButton.addEventListener("click", decrement);

function decrement() {
    counter--;
    counterSpan.textContent = counter;
}

function increment() {
    counter++;
    counterSpan.textContent = counter;
}





while loop for password length fails
function writePassword() {
    const passwordLength = prompt("please enter length of password between 8 and 128");
    const passLenInt = parseInt(passwordLength);
    let passCondition = 1
    while(passCondition != 0) 
    if (passwordLength < 8 || passwordLength > 128){
    const passwordLengthRetry = prompt ("Outside of suggested length, please choose between 8 and 128");
    passCondition ++
    
    
    } else{
      passCondition = 0
    }

}
*/