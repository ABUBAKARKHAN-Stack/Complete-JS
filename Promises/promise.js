// Create a promise to display the multiplication table of 2
const promiseBody = new Promise((resolve, reject) => {
    setTimeout(() => {
        let tableContent = '';
        for (let index = 1; index <= 10; index++) {
            const tableOfTwo = `2 * ${index} = ${index * 2}`;
            console.log(tableOfTwo);
            tableContent += tableOfTwo + "<br>";
        }
        // Set the body background and text color
        document.querySelector('body').style.background = '#000017';
        document.querySelector('body').style.color = '#fff';
        // Display the multiplication table in the element with class 'table'
        document.querySelector('.table').innerHTML = tableContent;
        resolve(); // Resolve the promise
    }, 5000); // Delay of 5 seconds
});

// Handle the resolved promise to clear the table content after 1 second
promiseBody.then(() => {
    setTimeout(() => {
        document.querySelector('.table').innerHTML = null;
        document.querySelector('body').style.background = '#fff'
    }, 1000); // Delay of 1 second
});

// Create and resolve a promise to display multiplication table of 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        let tableContent = '';
        for (let index = 1; index <= 10; index++) {
            const tableOfTwo = `2 * ${index} = ${index * 2}`;
            console.log(tableOfTwo);
            tableContent += tableOfTwo + "<br>";
        }
        // Set the body background and text color
        document.querySelector('body').style.background = '#000017';
        document.querySelector('body').style.color = '#fff';
        // Display the multiplication table in the element with class 'table'
        document.querySelector('.table').innerHTML = tableContent;
        resolve(); // Resolve the promise
    }, 5000); // Delay of 5 seconds
}).then(() => {
    // Clear the table content after 1 second
    setTimeout(() => {
        document.querySelector('.table').innerHTML = null;
    }, 1000); // Delay of 1 second
});

// Create a promise that resolves with an object containing user information
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Abubakar', Email: 'Abubakarxd7@gmail.com' });
    }, 2500); // Delay of 2.5 seconds
});

// Handle the resolved promise to log the user information
newPromise.then((userInfo) => {
    console.log(userInfo);
});

// Create a promise that resolves with an object containing user information
const moreOnPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ username: 'Abubakar', Age: 16.5 });
        } else {
            console.error("SOMETHING WENT WRONG");
        }
    }, 2500); // Delay of 2.5 seconds
});

// Handle the resolved promise to log the user's age
moreOnPromise
    .then((user) => {
        return user.Age;
    })
    .then((age) => {
        console.log(age);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('COMPLETED :)');
    });

// Create a promise that either resolves with an object or logs an error
const moreoverPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (err === false) {
            resolve({ Name: 'JS', Password: 123 });
        } else {
            console.log('ERROR : CODE CRASHED');
        }
    }, 2000); // Delay of 2 seconds
});

// Create an async function to consume the promise using await
async function consumed() {
    try {
        const letSEE = await moreoverPromise;
        console.log(letSEE);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function to consume the promise
consumed();

// SMALL QUIZ

// Select the element with class 'table' to display user data
const userData = document.querySelector('.table');

// Create a new promise to simulate an asynchronous operation
const myUsers = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // Simulate an error condition
        if (error) {
            resolve(); // Resolve the promise if there is an error (simulated logic)
        } else {
            console.log('ERROR');
        }
    }, 3000); // Delay of 3 seconds
});

// Consume the promise
myUsers
    .then((user) => {
        // Fetch data from a placeholder API after the promise is resolved
        return fetch('https://jsonplaceholder.typicode.com/todos/1');
    })
    .then((userInfo) => {
        // Parse the response as JSON
        return userInfo.json();
    })
    .then(data => {
        // Log the data received from the API
        console.log(data);
        // Destructure the data object to extract needed properties
        const { userId, id, title } = data;
        // Create a new div element to display the user data
        const itemElement = document.createElement('div');
        // Set the text content of the new div element with user data
        itemElement.textContent = `UserId: ${userId}, ID: ${id}, Title: ${title}`;
        // Append the new div element to the userData element
        userData.appendChild(itemElement);
    })
    .catch(error => {
        // Log any errors that occur during the fetch or JSON parsing
        console.error('Error fetching data:', error);
    })
