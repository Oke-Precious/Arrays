// const allItems = ['chocolate milo', 'cake', 'milky doughnut'];
// console.log(allItems);
// console.log(allItems.length);

// push, pop, shift, unshift
// push - adds item to the array
// pop - removes item from the array
// shift - removes item from the array
// unshift - add item to the start of the array


// 
// allStudents.push('Mariam')
// allStudents.push('Oluwanifemi')
// allStudents.unshift('Seyi')
// console.log(allStudents)


const allStudents = [];
const addStudent =()=>{
    const studentName = document.getElementById('student')
    if (studentName.value.trim() ==='') {
        errorMessage.innerHTML = "enter something";
        errorMessage.style.color = "red";
        setTimeout(() => {
            errorMessage.style.display = 'none'
        }, 1500);
    }
    else{
        allStudents.push(studentName.value)
        studentName.value = '';
        show.innerHTML = '';
        
        for (let i = 0; i < allStudents.length; i++) {
            console.log(i+1);
            show.innerHTML += `<p>${i+1}. ${allStudents[i]}</p>`
            
            
        }
        console.log(allStudents);
    }
}