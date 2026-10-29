/*
//BOM browther object model
/*
let result = confirm("Are You Sure")


function clickAlert() {
    Swal.fire({
   title:'Error!',
   text:'Do you want to continue' ,
   icon:'error' ,
   confirmButtonText:'Cool'
   })
}
*/
/*
let name = prompt("Enter your name:")
function clickAlert() {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});
}
setTimeout(()=> {
alert("your code is run")
},5000)
let timer2 = setInterval(()=>{console.log("hello somaya")},2000)
clearInterval(timer2)





//JSON javascript object notation
//let MyJsonEXP = '{"name":"bahaa"}'

let user ={
    name:"somaya",
    age:20
}
let result = JSON.stringify(user)
console.log(result)
let toObject =JSON.parse(result)
console.log(toObject.age)
JSON.stringify()


//API

fatch("https://jsonplaceholder.typicode.com/users").then( response => console.log((response.json()).then(data => console.log(data.name))),
);
*/

window.addEventListener('DOMContentLoaded', () => {
    let courseName = prompt("Please enter your course name:");
    if (courseName) {
        alert(`Welcome to the ${courseName} course dashboard!`);
    }

    displayStudents();
});

document.getElementById('refreshBtn').addEventListener('click', () => {
    window.location.reload();
});

const studentForm = document.getElementById('studentForm');
const studentsTableBody = document.getElementById('studentsTableBody');

studentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;

    const newStudent = { name, email };

    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.push(newStudent);

    localStorage.setItem('students', JSON.stringify(students));

    alert("Student added successfully!");

    studentForm.reset();
    displayStudents();
});

function displayStudents() {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    studentsTableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        studentsTableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    let confirmation = confirm("Are you sure you want to delete this student?");
    
    if (confirmation) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        
        students.splice(index, 1);
        
        localStorage.setItem('students', JSON.stringify(students));
        
        displayStudents();
    }
}

const loadApiBtn = document.getElementById('loadApiBtn');
const apiUsersList = document.getElementById('apiUsersList');

loadApiBtn.addEventListener('click', () => {
    apiUsersList.innerHTML = '';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.name} | Email: ${user.email}`;
                apiUsersList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to load API users.');
        });
});