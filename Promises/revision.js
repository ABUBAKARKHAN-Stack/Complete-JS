new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task is  Completed');
        resolve()
    }, 1000);
}).then(() => {
    console.log('Promise Consumed');
})

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task is 2  Completed');
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    console.log('Promise 2 Consumed');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 1; i <= 10; i++) {
            // console.log(`Table of ${i}`);
            for (let j = 1; j <= 10; j++) {
                // console.log(`${i} * ${j} = ${i * j} `);
            }
        } resolve()
    }, 2000);
})
promiseThree.then(() => {
    // console.log(`Promise 3 consumed`);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5])
    }, 1000);
})
    .then((res) => {
        console.log(res);
    })

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
                ID: 2932,
                course: "30 Days JS CODE"
            })
        } else {
            reject('Error: Failed to Fulfill promise')
        }
    }, 1000);
})

promiseFour.then((response) => {
    console.log(response);
    return response.course
})
    .then((course) => {
        console.log(course);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Promise either reslove or rejected');
    })

const pormiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({
                user: 'Abubakar',
                Master: 'JS'
            })
        } else { reject(`ERROR User Not Found :)`) }
    }, 1000);
})

async function consumedPromiseSix() {
    try {
        const response = await pormiseSix
        console.log(response.Master);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseSix()

// async function getAllCurrency() {
//     try {
//         const response = await fetch('https://v6.exchangerate-api.com/v6/d4f833a9727de430c29bc0c8/latest/USD')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('ERROR');
//     }
// }
// getAllCurrency()

fetch('https://v6.exchangerate-api.com/v6/d4f833a9727de430c29bc0c8/latest/USD')
.then((res)=>{
   return  res.json()
   
})
.then((data)=> console.log(data))
.catch(()=>{
    console.log('ERROR');
})
.finally(()=>{
    console.log(`promsie either resolve or rejetced`);
})