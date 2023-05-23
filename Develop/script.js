// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var symbols = "@#$%^&*(){}[]/?";
var all = ""




function generatePassword(){
//This is put in the generatePassword function because it needs to occur after you click on the button.
 var passwordLength = parseInt(prompt("How long do you want the password to be?"));
 console.log(passwordLength)
 //the code below shows that the user will be forced to return if they do not put in a value greater than 8 and less than 128
   if(passwordLength < 8 || passwordLength > 128) {
     alert ("Password must be longer than 8 characters and shorter than 128 characters"); 
     return;
   }
 //These are the pop up confirm boxes asking the user what values they would like in their password.
 var z = confirm ("Do you want uppercase letters?")
   if ( z  === true){
     all += upperCase
   }
 var y = confirm ("Do you want lowercase letters?")
   if (y === true){
     all += lowerCase
   }
  var x = confirm ("Do you want numbers?")
   if (x === true){
     all += numbers
   }
 var w = confirm ("Do you want symbols?")
   if (w === true){
     all += symbols;
   }
 //this is the for loop that is running my code to match the passwordLength variable above. The variable all is defined by an empty string to rperesent everchanging choices from the user.


 let mypassword= ""
 for (let i=0; i<passwordLength; i++){
   let randomIndex = Math.floor(Math.random()*all.length);
   mypassword += all[randomIndex];
   console.log(mypassword);
 }


 return mypassword;
}




// Write password to the #password input
function writePassword(){
 var password = generatePassword();
 var passwordText = document.querySelector("#password");


 passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










