
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

const createAccount = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (firstName === '' || lastName === '' || email === '' || password === '') {
        showError('Please fill in all fields', 'red');
        return;
    }
    else {
        const userObj = {
            firstName,
            lastName,
            email,
            password
        }
        const found = allUsers.find(user => user.email === email)
        // console.log(found)
        if (found) {
            showError('This user already Exist', 'orange');
        }
        else {
            allUsers.push(userObj);
            localStorage.setItem('myUsers', JSON.stringify(allUsers));
            btnload.innerHTML = `<div class="loading">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                <div>`;
            
            setTimeout(() => {
                window.location.href = 'signin.html';
            }, 1500);

            

        }
        // console.log(userObj);

    }
}
// console.log(window)
console.log(document);



// .filter
// .find use condition to look through and return the first matchz