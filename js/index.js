const email = document.getElementById('inputEmail');
const username = document.getElementById('inputUsername');
const password = document.getElementById('inputPassword');
const confirmPassword = document.getElementById('inputRepeatPassword');
const form = document.getElementById('registerForm');

form.addEventListener('submit', (e)=>{
    let messages = [];
    if(name.length <3 || name.length > 25 ){
        messages.push('Your username has to be between 3 and 25 characters long');
    }
    e.preventDefault();
});