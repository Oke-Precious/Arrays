
const showError = (message, errorColor) => {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = message;
    errorMessage.style.fontSize = '13px';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.color = errorColor;
}

const createAccount = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // alert(firstName);

    if(firstName === '' || lastName === '' || email === '' || password === '') {
        showError('Please fill in all fields', 'red');
        return;
    }
    else{
        showError('Account created successfully', 'green');
    }
}