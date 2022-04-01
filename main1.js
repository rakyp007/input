document.getElementById('main-form').addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault();
    var elemant = document.getElementById('main-form')
var proger  = ["Anna","Rakyp","izat"]
   // var name = elemant.name.value;
   var proger = elemant.proger.value
    
   
console.log(proger);
   
} 

let str = document.querySelector('a').textContent;
let regex = /\d/g;
let number = str.match(regex).join('')


const removeBtn = document.getElementById('remove');
const clearBtn = document.getElementById('clear');
let user ={
    name: 'Rakyp',
    age:15,
    position:' frontend'
}

let result = JSON.stringify(user);

localStorage.setItem('user', result);


function MirUser () {
    let user= localStorage.getItem('user');
    console.log(JSON.parse(user));
    console.log(user);

}
function handleRem () {
    localStorage.removeItem("user");
}
removeBtn.addEventListener('click', handleRem);
MirUser()
let userTwo ={
    nameTwo: 'Harry',
    ageTwo:24,
    positionTwo:' backend'
}
let resultTwo = JSON.stringify(userTwo);
localStorage.setItem('userTwo', resultTwo);

function getUserTwo () {
    let userTwo= localStorage.getItem('userTwo');
    console.log(JSON.parse(userTwo));
    console.log(userTwo);

}
getUserTwo () 



function handleRem () {
    localStorage.removeItem("user");
}
removeBtn.addEventListener('click', handleRem);

function handleRemTwo () {
    localStorage.removeItem("userTwo")
}
removeBtn.addEventListener('click', handleRemTwo);


function clearAll(){   
     localStorage.getItem("user");
    localStorage.getItem("userTwo")
localStorage.clear()
 
 }
 clearBtn.addEventListener('click' ,clearAll)