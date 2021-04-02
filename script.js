// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //generate password returns a string and that is stored as the variable pssword
  var password = generatePassword();
  //grab the html element from the dom and store that as a javascript variable
  var passwordText = document.querySelector("#password");
// assigning the value of the html element to be equal to the password generated above
  passwordText.value = password;

}

function generatePassword() {
  //prompt the user for the desired length of the password
  var desiredLength = prompt("What is the desired length of password? (8-120)"); // return a string---we want to convert to a number
    
  // we have a good length answer given
  if (desiredLength < 120 && desiredLength > 7) {
    // confirm do they want lowercase
    var lowercase = confirm("Do you want to include lowercase characters?")  // return boolean
    //confirm do they want uppercase
    var uppercase = confirm("Do you want to include uppercase characters?")  // return boolean
    //confirm do they want numeric
    var numeric = confirm("Do you want to include numeric characters?")  // return boolean
    //confirm do they want special
    var special = confirm("Do you want to include special characters?")  // return boolean
//we just need one of the character types confirmed
    if (lowercase || uppercase || numeric || special) {
      var lowerBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var upperBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var specialBank = ['!','@','#','$','%','^', '&', '*', '(', ')', '{', '}', '+', '=', '<', '>', '/'];
      var numericBank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      var avaiableBank = []; // ['a', 'b', 'c', 'A', 'B', 'C']

      if (lowercase) {
        // The foreach is cycling through my lowerbank array individually and putting all of these into my available bank variable
        lowerBank.forEach(function(character) {
          avaiableBank.push(character);
        })
      }
      if (uppercase) {
        // The foreach is cycling through my upperbank array individually and putting all of these into my available bank variable
        upperBank.forEach(function(character) {
          avaiableBank.push(character);
        })
      }
      if (specialBank) {
        // The foreach is cycling through my special array individually and putting all of these into my available bank variable
        specialBank.forEach(function(character) {
          avaiableBank.push(character);
        })
      }
      if (numericBank) {
        // The foreach is cycling through my numeric array individually and putting all of these into my available bank variable
        numericBank.forEach(function(character) {
          avaiableBank.push(character);
        })
      }
      
      console.log(avaiableBank);

      //repeat this for uppercase etc
      var password = '';
      for (var i = 0; i < parseInt(desiredLength); i++) {
        //get a random character from the list of avaialbe characters based on user confirmations
        // get a random number based on the length of the avaiable bank
        var randomNumber = Math.floor(Math.random()*(avaiableBank.length) + 0) //any number between 0 and 6 in our example
        console.log(randomNumber);
        //that number can be the [number] of the array;  -> random number might be 4---> randomCharacter = availableBank[4] ---> randomCharater = 'B'
        var randomCharacter = avaiableBank[randomNumber] // availalbeBank[4] -> 'B'
        console.log(randomCharacter)
        //concatenate the random character onto the password string
        password = password + randomCharacter;
        console.log(password);
      }
      //we have built a password as variable password
      return password;


    } else {
      //no character types confirmed
      //alert user to their error
      //loop em back
      alert("whoops");
      generatePassword();
    }
    
  // bad length answer
  } else {
    //alert user to bad length
    console.log('oops you chose a bad length')
    generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
