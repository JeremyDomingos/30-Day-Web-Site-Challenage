const genPasswordBtn = document.getElementById("btn")
const newPassword = document.getElementById("input");


function alphabetCreator(){
    let asciiLowercase = ''

    for (let i = 33; i <= 176; i++){
        asciiLowercase += String.fromCharCode(i);
    }

    return asciiLowercase;
   
}


genPasswordBtn.addEventListener('click', () => {
    let randomindex; 
    let password = '';
    let alphabet = alphabetCreator(); 

    for (let i = 0; i < 20; i++ ){
        randomindex = Math.floor(Math.random() * 143 )
        password += alphabet[randomindex];
    }

    newPassword.textContent = password;

});
    