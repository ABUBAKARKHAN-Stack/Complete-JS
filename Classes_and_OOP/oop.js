// ============================== Object Literals =================================

// const user = {
//     // User's basic details
//     username: "Abubakar",
//     Age: 16,
//     LoginCount: 10,
//     isLoggedIn: true,
    
//     // Method to log user details
//     userDetails: function () {
//         console.log('Got User Details From Database');
//         console.log(`Username = ${this.username}`);
//         console.log(this);
//     },

//     // Array of user's live locations
//     userLiveLocation: ['Karachi', 'Lahore', 'Islamabad']
// }

// Logging the number of times user has logged in
// console.log(user.LoginCount);

// Logging the first live location of the user
// console.log(user./userLiveLocation[0]);

// Calling the userDetails method to log user details
// user.userDetails();
// /

// ============================= Constructor Function ===============================

// Creating a new promise (currently does nothing)
// const promiseOne = new Promise((resolve, reject) => {
    // Placeholder for async code
// });/

// Creating a new Date object representing the current date and time
// const myDate = new Date();

// Constructor function to create a new User object
function User(username, LoginCount, isLoggedIn , greet) {
    // Step 3: The User function is called with this bound to the new object.
    this.username = username;   // Assign username to the new object
    this.LoginCount = LoginCount;  // Assign login count to the new object
    this.isLoggedIn = isLoggedIn;  // Assign login status to the new object

    // Example of a method within the constructor function
    this.greeting = function mygreet() {
        console.log(`Welcome User ${this.username}`);
    }
}

// Creating new user objects using the constructor function
// Step 1: A new object is created.
const userOne = new User('Abubakar', 12, true );
const userTwo = new User('Tanoli', 1, false);

// Logging the newly created user objects
console.log(userOne);
// Step 4: The new object is returned.
console.log(userTwo instanceof User);

// HERE'S Some LINES ON NEW Keyword
// 1: A new object is created.
// 2: The new object's prototype is set to User.prototype.
// 3: The User function is called with this bound to the new object.
// 4: The new object is returned.
