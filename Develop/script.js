// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var passwordEl = document.querySelector("#password");


var randomFunc = {
  lower: getRandomLower, upper: getRandomUpper, number: getRandomNumber, symbol: getRandomSymbols
}

generateBtn.addEventListener("click", function () {
  var length = +lengthEl.value;
  var hasUpper = uppercaseEl.checked;
  var hasLower = lowercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbols = symbolsEl.checked;
  //console.log(length);

  // Generate the password on the screen
  passwordEl.innerHTML = writePassword(hasUpper, hasLower, hasNumber, hasSymbols, length);
});

function writePassword(lower, upper, number, symbol, length) {
  // Set the length parameters to start the program 
  if ((length >= 8) && (length <= 128)) {
    // Generate string for password
    var newPassword = "";
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{ lower }, { upper }, { number }, { symbol }];
    //console.log(typesArr);

    // Filter out the false values of the array
    function bouncer(array) {
      return array.filter(item => Object.values(item)[0]);
    }

    var filteredArr = bouncer(typesArr);
    //console.log(filteredArr);

    // If nothing is selected 
    if (typesCount === 0) {
      alert("ERROR: You haven't made a selection!");
      return "";
    }

    // Create loop of the true values of the array 
    for (var i = 0; i < length; i++) {
      randomTypeObject = filteredArr[Math.floor(Math.random() * typesCount)]
      var randomType = ""
      for (var j in randomTypeObject) {
        randomType = j;
      }
      console.log("type:" + randomType);

      newPassword += randomFunc[randomType]();
    }
  }
  // If they enter in incorrect character length values
  else {
    alert("ERROR: You entered an invalid character length.")
  }
  // Update the length of the password not including the types count
  var finalPassword = newPassword.slice(0, length);

  //console.log(finalPassword);
  return finalPassword;
}

// Random functions for each value 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols() {
  var symbols = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ];
  return symbols[Math.floor(Math.random() * symbols.length)];
}




