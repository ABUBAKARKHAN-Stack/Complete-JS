// function syMyName() {
//     console.log("A");
//     console.log("B");
//     console.log("U");
//     console.log("B");
//     console.log("A");
//     console.log("K");
//     console.log("A");
//     console.log("R");
// }
// // syMyName  This is Called As References
// // syMyName()  This is To execute Function

// /*                                                    What IS Params And Arrgument ?
// Let's imagine you have a toy kitchen, and you want to make some imaginary cupcakes with it. In JavaScript, functions are like the recipe for making cupcakes, and parameters and arguments are like the ingredients you need.
// :: PARAMSTERS ::
// Parameters are like empty boxes in your recipe that you can fill with different ingredients.
// Let's say your cupcake recipe has a parameter called flavor. This means you can make cupcakes with different flavors by putting different things in the flavor box.
//   EXAMPLE CODE :: >
//    function makeCupcake(flavor) {
//  console.log("Making a " + flavor + " cupcake!");
// }
// :: Argument :: 
// Arguments are the actual things you put into the empty boxes (parameters) when you use the function.
// In the first example, "chocolate" is an argument because it's what you put into the flavor box when you make a chocolate cupcake.
// EXAMPLE > 
//  makeCupcake("chocolate");


// In the second example, "vanilla" is an argument because it's what you put into the flavor box when you make a vanilla cupcake.
// EXAMPLE >
// makeCupcake("vanilla");

// function makeCupcake(flavor) {
//   console.log("Making a " + flavor + " cupcake!");
// }

// makeCupcake("chocolate");  // "chocolate" is the argument for the flavor parameter
// makeCupcake("vanilla");    // "vanilla" is the argument for the flavor parameter

// */

// // Let's Create A Function Which Add Sum Of Two Number
// function addTwoNumber(number1, number2) {
//         let result =  number1 + number2
//         return result ;
//         // console.log("Hi"); // It Will not Execute Because After Return Keyword the any Statement will not be count
//         // let name = 45
// }
// const result = addTwoNumber(5, 9)
// console.log(result);
// // Now Output = 14


// function loginUSerMsg (username){
//     if (!username) {
//         console.log("Please Enter User Name");
//         return
//     }
//       return `${username} Just Logged IN`

// }

// console.log(loginUSerMsg ());   

// function calc (num1 , num2 ,  num3) {
//     console.log(num1 + num2 + num3);
// }
// calc (3 , 7 ,1)

// function myCart (vl1 , vl2 , ...numb1){
//     return numb1

// } 

// console.log(myCart (566 , 8778 , 657 , 90098 ,78));

// function obj (getObj) {
// return getObj.userName
// }
// console.log(obj ({
//     userName : "abubakar" , 
//     age : 16
// }));


// function arr (getarr) {
//     return getarr
// }
// console.log(arr([200 , 400 , 706 , 90909].slice( 0 ,2)));