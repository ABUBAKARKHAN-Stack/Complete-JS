  // There are two ways to create Object in js //
//   1 : Constructor  Method  
//   2 : Object Literls
 
// Constructor  Method //
  // Object.create 
//   This Method is used to create object by using constructor method


                         //             Object Literls             //
// In This Lecture we will study object literls
// const mySym = Symbol('key1')

// const FbUser = {
//     name : "Abubakar" , 
//     age : 16 ,
//     location : "Karachi" ,
//     email : "abubakar@google.com" ,
//     IsLogedIN : false , 
//     LastLoginDays : ['Monday' , 'Saturday'],
//     /*
//     This Method is used to define a Symbol Data_type in Object 
//     [mySym] : 'key1'
//     */
// }
// console.log(FbUser);
// Output => {
//     name: 'Abubakar',
//     age: 16,
//     location: 'Karachi',
//     email: 'abubakar@google.com',
//     IsLogedIN: false,
//     LastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'key1'
//   }

                                          // FREEZE Function () //
                                          
// Object.freeze(FbUser)
// FbUser.IsLogedIN = true
// console.log(FbUser);
// The `Object.freeze()` method in JavaScript is used to prevent an object from being modified. Once an object is frozen, its properties cannot be added, deleted, or modified.
// Output =>  Remains Same
/*
{
     name: 'Abubakar',
     age: 16,
     location: 'Karachi',
     email: 'abubakar@google.com',
   IsLogedIN: false,
     LastLoginDays: [ 'Monday', 'Saturday' ]
} 
*/

// const FbUser = {
//     name : "Abubakar" , 
//     age : 16 ,
//     location : "Karachi" ,
//     email : "abubakar@google.com" ,
//     IsLogedIN : false , 
//     LastLoginDays : ['Monday' , 'Saturday'],
    
// }
  
// Adding a Function in Object //
// FbUser.greeting = function() {
//     console.log('Hello Facebook Users');
// }

// console.log(FbUser.greeting);
// Output => Hello Facebook Users ,
//           undefined
     // ..We will learn in future Why undefined is also printing , But For Now Just Ignore .. //

                // THIS Keyword In JS //
// FbUser.greetingTwo = function() {
//     console.log(`Hello Facebook User ${this.name}`);
//     In JavaScript, the `this` keyword refers to the object that is currently executing the code.
                      // ..We will learn More on 'this' in future .. //
// }
// console.log(FbUser.greetingTwo());
// Output => Hello Facebook User Abubakar
//           undefined
      // ..We will learn in future Why undefined is also printing , But For Now Just Ignore .. //
