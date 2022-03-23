// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = "";
    let lengthNum = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
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

    window.alert("Your password will contain " + lengthNum + " characters and at least one of each selected character.")
    // Generate password with the desired number of random selected characters with 'for'
    for (let i = 0; i <= lengthNum-1; i++ ) {
      var randomChar = Math.floor(Math.random() * passChars.length);
      password += passChars.substring(randomChar, randomChar +1);
    };
  // Associate with the password id
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
