
var generateBtn = document.querySelector("#generate");

const lowLetters = "abcdefghijklmnopqrstuvwxyz"
const highLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowLettersList = lowLetters.split("")
const highLettersList = highLetters.split("")
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCharsList = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":","\""]

generateBtn.addEventListener("click", writePassword);


function writePassword() {

  //password length identifier
  const passwordLength = prompt("please enter length of password between 8 and 128");
  const passLenInt = parseInt(passwordLength);
    
    if (passwordLength >= 8 && passwordLength <= 129) {
     
      }else {
      alert("Outside of suggested length, please start again and enter a number between 8 and 128")
     
      }
      //password criteria identifier
    if (passwordLength >= 8 && passwordLength <= 128) {
    const lowerCaseSelector = confirm("Password criteria: Would you like to include 'lowercase letters' in your password?")
    const upperCaseSelector = confirm("Password criteria: Would you like to include 'uppercase letters' in your password?")
    const numberSelector = confirm("Password criteria: Would you like to include 'numbers' in your password?")
    const specialSelector = confirm("Password criteria: Would you like to include 'special characters' in your password?")

    let preDefined = [lowLettersList, highLettersList, numbersList, specialCharsList]
    let criteria = [lowerCaseSelector, upperCaseSelector, numberSelector, specialSelector];
    let falseCount = 0

// match selected criteria to predefined list
    for (let i = 0; i < 4; i++) {
      if (criteria[i] == false) {
        falseCount++
      }
     
      if (falseCount == 4) {
        alert("no criteria selected, please start again and select minimum one criteria")
      }
    }
 
    for (let ii = 0; ii < 4; ii++) {
      
      if (criteria[ii] == true) {
        criteria[ii] = preDefined[ii]
      }
      
// remove false statements from list
    }
    for (let io = criteria.length-1; io--;) {
      if (criteria[io] === false) criteria.splice(io, 1);
      
    }
    let criteriaMerged = criteria[0].concat(criteria[1], criteria[2], criteria[3])

// multiplier to reach max character length
    const criteriaMString = criteriaMerged.toString()
    let criteriaStringMulti = criteriaMString.repeat(4)
    const criteriaFinal = criteriaStringMulti.split("")



//password shuffler + generator
  const shuffler = criteriaFinal.sort(() => 0.5 - Math.random());
 
      let shufflePassword = shuffler.slice(0, passwordLength);
      const finalPass = shufflePassword.join("")

      alert("Your password is " + finalPass)

      
    } 
}
