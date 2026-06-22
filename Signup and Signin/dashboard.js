const fetchInfo = () =>{
    if(!localStorage.signedInUser){
        window.location.href = 'signin.html';
    }
}

const gottenUser = JSON.parse(localStorage.getItem('signedInUser'))
console.log(gottenUser);
show.innerHTML = `
                <h1>Hello ${gottenUser.firstName}</h1>`
const logout = () =>{
    localStorage.removeItem('signedInUser');
    window.location.href = 'signin.html';
    // console.log('I logged out');
    
}