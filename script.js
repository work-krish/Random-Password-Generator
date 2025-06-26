

const passwordBox = document.querySelector(".passwords");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|{}[]<>/-=?"
const allChar = upperCase + lowerCase + number + symbol;

function createPassword (){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

   while(length > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)];
   

    }

    // passwordBox.value = password;
    console.log(password);
} 

 

createPassword();