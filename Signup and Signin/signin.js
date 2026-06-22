const allUsers = JSON.parse(localStorage.getItem('myUsers')) || [];

const showError = (message, errorColor) => {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = message;
    errorMessage.style.fontSize = '13px';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.color = errorColor;
    errorMessage.style.marginBottom = '10px'
    setTimeout(() => {
        errorMessage.innerHTML= '';
    }, 1500);
}

const signIn = () =>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // console.log(email, password);
    if(email.trim()=== '' || password.trim() === ''){
        showError('Kindly fill in all inputs', 'red')
    }
    else{
        const found = allUsers.find(user => user.email === email && user.password === password)
        console.log(found);
        if (found) {
            btnload.innerHTML = `<div class="loading">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                <div>`;
            JSON.stringify(localStorage.setItem('signedInUser', found))                   
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
            
        }
        else {
            showError('User does not exist', 'orange');

        }
    }
}