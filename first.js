//var , let and const 
// //declaring var in js 
// var example; //In var Initiialization is not mandatoty
// example=4;
// console.log(example);
// var message = "HI"; // declaring and Assigning in one line
// console.log(message)
// var message = "bye"; //redeclaring Again in var
// console.log(message);
// message='no'  //Reassigning Value in var
// console.log(message)

// console.log(a); ----> For Hoisting
// var a = 10 ;
// console.log(a);
// function Sum(){
//     a=2;
//     console.log(a)
// }
// Sum();

//Declaring let in js
// let example; // In let Initiialization is not mandatoty
// example=4;
// console.log(example);
// let message = "Hi";
// console.log(message)
// //let message = "hello" //you cannot re-declare a value in let 
// message = "No"
// console.log(message) // We can update the Value in Let just like var 

//Declaring const in js
// const example; // We cannot intialize Value in const 
// example=4;

// const message = "Hi";
// console.log(message);
// const message = "Hello" //you cannot re-declare a value in const just like let 
// const message = "hi"
// message="no" //We cannot Update for constant Value in const 

//------ !!!---------
//For Hoisting in Let 
// console.log(b);  //ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// let b=10;
// console.log(b);
// function Sum(){
//     b=3;
//     console.log(b);
// }

// Sum();
//-----!!!---------

//------ !!!---------
//For Hoisting in const 
//console.log(b);  //ReferenceError: Cannot access 'b' before initialization
// const b=10;
// console.log(b);
// function Sum(){
//     b=3;
//     console.log(b);
// }

// Sum();
//-----!!!---------

