let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
let MMDDYY = new Date ("01-05-2024")

// console.log(MMDDYY.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(MMDDYY.getTime());
// console.log(Math.floor(Date.now()/1000));
// this Method to uconvert date into secconds
let newDate = new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMinutes());
// console.log(`Today Date is ${newDate.getDay()} and Month is ${newDate.getMonth()+1} And Year Is ${newDate.getFullYear()} `)

console.log(newDate.toLocaleString('default', {
    weekday : "short",
   year:"2-digit"
}))