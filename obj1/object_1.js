// // Singleton method
// Object.create

// // Object Literals
const my_Sym = Symbol("Key1")

const  jsUser =  {
    name : "Abubakar" ,
    "age Num": 16 ,
    isLogedIn:  true,
    Location:  ["Monday" , "Tuesday " , "Wednesday"] , 

}
// METHOD TO ADD SYMBOL () IN JS //
jsUser[my_Sym] = Symbol ("Key1")

// console.log(jsUser.isLogedIn);
// console.log(jsUser["Location"]);
// console.log(typeof jsUser);
// console.log(jsUser["age Num"]); This is Another method to print obj

// jsUser.name = "Khan"
// console.log(jsUser.name);

// jsUser["age Num"] = 18
// Object.freeze(jsUser)
// jsUser["age Num"]= 20
// console.log(jsUser);

// jsUser.gretting = function () {
//     console.log("Hello JS USERS");
// }
// console.log(jsUser.gretting());

jsUser.gretting_Two = function () {
    console.log(`Hello JavaScript User ${this.name}`)
}
console.log(jsUser.gretting_Two());
console.log(jsUser.gretting_Two());

 

