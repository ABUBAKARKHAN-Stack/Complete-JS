// const  macUser = new Object ()
//  macUser.id = "78900"
//  macUser.name = "Jeff"
//  macUser.isLoggedIN = false
// console.log(macUser);

// Adding Object In Obj //

// const regular_User = {
//     email : "some@htc.com" ,
//     fullname : {
//         userfullname : {
//             firstname : "alex" ,
//             lastname :   "Marco"
//         }
//     }
// }
// console.log(regular_User.fullname.userfullname.firstname);


// const obj1 = {1: "a" , 2: "b" , 3: "c"}
// const obj2 = {4: "d" , 5: "e" , 6: "f"}

// // const obj3 = Object.assign(obj1 , obj2)
// // const obj3 = Object.assign({}, obj1 , obj2) BEST WAY To Assign Objects
// const obj3 = {...obj1 , ...obj2} => We can Also Use Spread Operator to Assign Objects
// OUTPUT Remains SAME => { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(obj3);


// const users = [
//     {
//         id :1 ,
//         email : "first@gmail.com"
//     }
// ,
//     {
//         id :2 ,
//         email : "second@gmail.com"
//     }
// ,
//     {
//         id :3 ,
//         email : "third@gmail.com"
//     }
// ]

// console.log(users[0]);c => This Mthod Is used to add Array in Obj and print
// OUTPUT => first@gmail.com

// Method Yo access KEYS in Object //
// MOST IMP METHOD //

//  const appleUser = new Object()
// {appleUser.email = "user1@apple.com"}
// {appleUser.id = "7660"}
// {appleUser.name = "Henry"}
// console.log(Object.keys(appleUser));
// // OUTPUT => [ 'email', 'id', 'name' ] It Gives Output As Array



// // Method Yo access Values in Object //
// // MOST IMP METHOD //

// const appleUser = new Object()
// { appleUser.email = "user1@apple.com" }
// { appleUser.id = "7660" }
// { appleUser.name = "Henry" }
// console.log(Object.values(appleUser));
// // OUTPUT => [ 'user1@apple.com', '7660', 'Henry' ] It also Gives Output As Array

// Method Yo access Entries in Object //
// MOST IMP METHOD //

// const appleUser = new Object()
// { appleUser.email = "user1@apple.com" }
// { appleUser.id = "7660" }
// { appleUser.name = "Henry" }
// console.log(Object.entries(appleUser));

//  OUTPUT =>[
//   [ 'email', 'user1@apple.com' ],
//   [ 'id', '7660' ],
//   [ 'name', 'Henry' ]
// ]
//It also Gives Output As Array Into Array But Usage = Less

// const appleUser = new Object()
// { appleUser.email = "user1@apple.com" }
// { appleUser.id = "7660" }
// { appleUser.name = "Henry" }
// console.log(appleUser.hasOwnProperty('email'));
// OUTPUT = > true Because email Exist in this gigven object
 

const course = {
    name : "JS-Hindi" , 
    price : "900INR"  ,
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor} = course
console.log(courseInstructor);