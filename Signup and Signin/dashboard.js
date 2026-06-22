const gottenUser = JSON.parse(localStorage.getItem('signedInUser'))
// console.log(gottenUser);
show.innerHTML = `
                <h1>Hello ${gottenUser.firstName}</h1>`
