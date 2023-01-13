// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array


// Function to generate password with user input
function generatePassword() {
  var passwordOptions = []
  var finalPassword = []
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
 // if (contains === false && upperCasedCharacters,
  //contains === false && lowerCasedCharacters,
  //contains === false && numericCharacters,
  //contains === false && specialCharacters)
  if (confirmLength<10 || confirmLength>64){
    alert ("choose an appropriate password length")
    return 
  }
  var containsUppercase = confirm("Do you want your password to contain uppercase?")
  var containsLowercase = confirm("Do you want your password to contain lowercase?")
  var containsNumbers = confirm("Do you want your password to contain numbers?")
  var containsSymbols = confirm("Do you want your password to contain symbols?")
  if (containsUppercase===true){
    passwordOptions = passwordOptions.concat(upperCasedCharacters)

  }
  if (containsLowercase===true){
    passwordOptions = passwordOptions.concat(lowerCasedCharacters)
  }
  if (containsNumbers===true){
    passwordOptions = passwordOptions.concat(numericCharacters)
  }
  if (containsSymbols===true){
    passwordOptions = passwordOptions.concat(specialCharacters)
  }
  
  
  
  for (var i = 0; i < confirmLength; i ++){
    finalPassword.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)])
  }
  console.log(finalPassword)
  return finalPassword.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);