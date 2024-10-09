const clock = document.querySelector('#clock')
console.log(clock);

setInterval(function () {
    const myDate = new Date()
console.log(myDate.toLocaleTimeString());
clock.innerHTML = myDate.toLocaleTimeString()
} , 1000 )