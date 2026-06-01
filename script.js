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
    }
    else{
        allStudents.push(studentName.value)
        studentName.value = '';
        console.log(allStudents);
        show.innerHTML = `<td>${allStudents}</td>`;
    }
}