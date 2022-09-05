// Assignment Code
let generateBtn = document.querySelector("#generateBtn");
let passwordText = document.querySelector("#password");

let passLength;
// Define the password length and run the next function according to the requirements
function runScript() {
  let lengthNum = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
  if (lengthNum >= 8 && lengthNum <=128) {
    window.alert("Your password will contain " + lengthNum + " characters and at least one of each selected character.");
    passLength = lengthNum;
    writePassword();
  } else {
    window.alert("Your password must contain at least 8 characters and no more than 128 characters");
    runScript();
  };
};

// Write password to the #password input
function writePassword() {

let password = "";
let passChars = "";

    // Confirm and add the desired characters to be used in the password
    if (window.confirm("Wanna include lowercases?")) {
      passChars += "abcdefghijklmnopqrstuvwxyz";
    };
    if (window.confirm("Wanna include uppercases?")) {
      passChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    if (window.confirm("Wanna include numbers?")) {
      passChars += "0123456789";
    };
    if (window.confirm("Wanna include special characters?")) {
      passChars += "!@#$%^&*()";
    }

    // Generate password with the desired number of random selected characters with 'for'
    for (let i = 0; i <= passLength-1; i++ ) {
      var randomChar = Math.floor(Math.random() * passChars.length);
      password += passChars.substring(randomChar, randomChar +1);
    };

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", runScript);
