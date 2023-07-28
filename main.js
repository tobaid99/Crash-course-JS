// // alert('Hello World');
// // console.log('hello');
// // console.error('This is error ');
// // console.warn('This is a warning ')

// //let , const 
// // let age =30 
// // console.log(age);


// let scror;
// scror = 10;
// console.log(scror);



// //string  ,  Numbers ,Boolean ,Null ,Undefined
// const name= 'John';

// const age = 30;
// const rating= 4.5;
// const isCool= true;
// const x=null;
// const y= undefined;
// let z;
// console.log(typeof name);
// console.log(typeof rating)
// console.log(typeof isCool)







// //Concatenation
// console.log('My name is  '+ name +' I am  ' +age);
// const hello=('My name is  '+ name +' I am  ' +age);
// console.log(hello)


 
// const s ='Hello world ';
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0,5))
// console.log(s.substring(0,5).toUpperCase());

// console.log(s.split(''));

// //Arrays multiple values


// const fruits =[ 'apples' ,' oranges' , 'banana'];
// fruits[3]='pears';
// console.log(fruits);
// fruits.push('mangos')
// fruits.unshift('strawberries');
// console.log(fruits[1]);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('mangos'));




// const person= {

//     firstName: 'Jhon',
//     LastName: ' Doe',
//     age: 30,
//     hobbies : [ 'music' , 'movies' , 'sport'],
//     address : {
//         street : '50 main st' ,
//         city :'Boston' ,
//         state: ' MA'
//     }
// }

// console.log(person);

// console.log(person.firstName);
//  console.log(person.hobbies[1]);
//  console.log(person.address.city);




//  const todos=[
//     {
//         id:1,
//         text: 'Take out trash',
//         isComplated: true 
//     } ,
//     {
//         id:2,
//         text: 'Metting with Boss',
//         isComplated: true 
//     } ,
//     {
//         id:3,
//         text: 'Dentist appt',
//         isComplated: false 
//     } ,
//  ];

//  console.log(todos[1].text);


//  for(let i=0 ; i<todos.length; i++){

//     console.log(todos[i].text);

// }
// //foreach , map , filter
// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// for(let todo of todos){
//     console.log(todo.text);
// }

 

//  const todoJSON =JSON.stringify(todos);
//  console.log(todoJSON);



// console.log("welcome to js","color: red;  font-size: 40px")



let a="we love ";
let b="Java Scipt";
document.write(a+b);

console.log(a , "\" b);


var myName= "  Tareq";
console.log("Hello" + myName);
console.log(`Hello ${myName}`)
//  //For

//  for(let i=0 ; i<10; i++){

//     console.log('For loop Number: ${i}');

// //  }
//  for(let i=0 ; i< todos.length; i++){

//     console.log(`For loop Number: ${i}`);

//  }


// String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 80;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof age);

//Strings
/*
const nameB = 'John';
const age = 80;

//Concatenation

// console.log('My name is ' + nameB + ' and I am ' + age); 
// console.log('My name is ${nameB} and I am ${age}');


const s = 'Hello World'

console.log(s.length)
console.log(s.substring (0, 5).toUpperCase());

// Split a string into a array

console.log(s.split(''))
console.log(s.split(''))

// Blog tags

const b = 'tech, computer, layout, IT, code'
console.log(b.split(', '));

/* multi
Lines
comment */


//Arrays
/*
const numbers = new Array('1,2,3,4,5')
console.log(numbers)

const fruits = ['apple', 'orange', 'pear', 'peach', 10, true]
console.log(fruits);

console.log(fruits[1]);

//add value to an array

fruits[5] = 'grapres'

console.log(fruits[5])

//push method

fruits.push('mangos')
console.log(fruits)

//adds the in the first position

fruits.unshift('strawberry')
console.log(fruits)

//eliminates the last one

fruits.pop()
console.log(fruits)

//check if array is array

console.log(Array.isArray(fruits))

// position in the array

console.log(fruits.indexOf('pear'))

// object literal

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'art', 'sports'],
    address: {
        street: 'conchinhas',
        city: 'corunha',
        state: 'galiza',
    }
}

console.log(person);

console.log(person.firstName,person.age,person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address.city);

const{ firstName, lastName} = person;

// add information
person.email = 'john@gmail.com';

console.log(person.email)
*/
// Array of objects

// const todos = [
// {
//     id: 1,
//     text: 'Take out the trash',
//     isCompleted: true,
// },
// {
//     id: 2,
//     text: 'Meeting with Boss',
//     isCompleted: true,
// },
// {
//     id: 3,
//     text: 'Dentist appo.',
//     isCompleted: false,
// },



/*
console.log(todos);

console.log(todos[0]);

//convert to JSON, for sending data to a server.

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

*/
// For loops

// for(let i = 0; i <= 10; i++) {
//     console.log('For loop Number: ' + i);
// }

// while loop
// let b = 0
// while(b < 10) {
//     console.log('while loop number: ' + b);
//     b++;
// }

// Loop Array
/*
for(let i = 0; i <= todos.length; i++) {
    console.log('array looping: ' + i);
}

for(let todo of todos) {
    console.log(todo.text)
}

for(let todo of todos) {
    console.log(todo.id)
}

for(let todo of todos) {
    console.log(todo.isCompleted)
}

//forEach, map, filter
//Each, takes EACH text

todos.forEach(function(todo){
    console.log(todo.text)
})

// make a new array from an array

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//filter by the boolean
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
*/
//filtering the array to give the resilto that there are completed and tru
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;   
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);
*/
//Condicionals:
/*
const x = 6;
const y = 8;

if(x === 10){
    console.log('x is 10');
} else if (x > 10) {
    console.log("x is greater than 10");
} else{
    console.log("x is less than 10");
};

if(x > 5 && y < 10){
    console.log('x is more than 5 and y is less than 10');
}

if(x > 5 || y < 10){
    console.log('x is more than 5 or y is less than 10');
}

// turneri??? operator, assing var to a condition then = ?

const w = 13;
const color = w < 10 ? 'red' : 'blue';

console.log(color);

//switches, evaluate a condition

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}


// Functions
/*
function addNums(num1 = 1, num2 = 1){
    return num1 + num2 ;
}

console.log(addNums(5,5));
*/
//Arrow
/*
const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2 ;
}

console.log(addNums(5,9));

const addNumb = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNumb(10,9));

//only 1 parameter

const addNum2 = num4 => num4 + 5;

console.log(addNum2(10));

//objetc oriented program
//Constructor function
function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}

//instantiate object

const person1 = new Person('john', 'doe', '4-3-89');
const person2 = new Person('marie', 'alonso', '5-6-89');


console.log(person1)
console.log(person2)
console.log(person2.dob)

//dates strings vs objects Date(dob)

function PersonDob(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob= new Date(dob);
}

const person3 = new PersonDob('marie', 'alonso', '5-6-1989');

console.log(person3.dob)
console.log(person3.dob.getFullYear())

//adding methods to the person's object

function PersonYear(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person4 = new PersonYear('Pedro', 'Martinez', '2-10-1974');

console.log(person4.getBirthYear())
console.log(person4.getFullName())
console.log(person4)

//using Prototipes for the same

function PersonProto(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

PersonProto.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

PersonProto.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

const person5 = new PersonYear('Maria', 'Basanta', '2-10-1974');

console.log(person5);
console.log(person5.getBirthYear());
console.log(person5.getFullName());

// the same but with class with methods

class Person6 {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person6 = new Person6('Maria', 'Uribarrena', '2-10-1974');

console.log(person6.getFullName())
*/
/*
//DOM
console.log(window)
//Selecction from the DOM
//Single elements
// document.getElementById('my-form');
// console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');
console.log(form);

// query selector for classes, only selects the first
console.log(document.querySelector('h1'));

//multiple selection
//gives an array, we can run array methods.
//selectorAll works with id, class, tag
// console.log(document.querySelectorAll('item'));

//looping through and grabbing each of them

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> Hello </h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

b   tn.addEventListener('mouseover', (e)=> {
    e.preventDefault();
   document.querySelector('#my-form').style.background = '#ccc';
   document.querySelector('body').classList.add('bg-dark');
   document.querySelector('.item').lastElementChild.innerHTML = '<h1> Hello </1>'
});

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === ''|| emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter the fields';
        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}' : '${emailInput.value}`));

        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}


  




