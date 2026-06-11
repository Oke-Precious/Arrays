// const allItems = ['chocolate milo', 'cake', 'milky doughnut'];
// console.log(allItems);
// console.log(allItems.length);

// push, pop, shift, unshift
// push - adds item to the array
// pop - removes item from the array
// shift - removes the first item from the array
// unshift - add item to the start of the array


// 
// allStudents.push('Mariam')
// allStudents.push('Oluwanifemi')
// allStudents.unshift('Seyi')
// console.log(allStudents)


const allStudents = JSON.parse(localStorage.getItem('items')) || [];
let gottenIndex;
const showAll = () => {
    showItem()
}
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
        localStorage.setItem('items', JSON.stringify(allStudents))
        showItem()
        // console.log(allStudents);
    }
}

const showItem = ()=>{
    for (let i = 0; i < allStudents.length; i++) {
            // console.log(i+1);
            show.innerHTML += `
            <p>${i+1}. ${allStudents[i]}</p>
            <div>
                <button onclick="deleteItem(${i})">Delete</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getIndex(${i})">Edit</button>
            </div>
            `
            
            
        }
}
const deleteItem=(index)=>{
    show.innerHTML = '';
    // console.log(index)
    allStudents.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(allStudents));
    // console.log(allStudents);
    showItem()
}
const getIndex=(param)=>{
    gottenIndex = param;
    editInput.value = allStudents[gottenIndex]
}

const savedEdit = () => {
    console.log(gottenIndex)
    show.innerHTML = '';
    const editInput = document.getElementById('editInput')
    if(editInput.value.trim() ===''){
        editError.innerHTML = "enter something";
        editError.style.color = "red";
        setTimeout(() => {
            editError.style.display = 'none'
        }, 3000);
    }
    else{
        allStudents.splice(gottenIndex, 1, editInput.value);
        localStorage.setItem('items', JSON.stringify(allStudents));
        showItem()
    }
    
}
// const arr = [1,2,3,4,5]
// splice(3, 1)
// console.log(arr)