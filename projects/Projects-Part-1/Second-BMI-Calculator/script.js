const form = document.querySelector("form")
console.log(form)
form.addEventListener('submit' , (e) => {
  e.preventDefault()

const height = parseFloat(document.querySelector('#height').value)
const weight = parseFloat(document.querySelector('#weight').value)
const results = document.querySelector('#results')
const showMsg  = document.querySelector('#showMsg')
if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Your Valid Height`
    results.style.color = 'red'
}else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Enter Your Valid Weight'
    results.style.color = 'red'
}
else {
  const bmi =  (weight / ((height * height) / 10000)).toFixed(2)
  // Show the Result 
  results.innerHTML = `${bmi}` 
  results.style.color = 'white'
   if (bmi <= 18.6) {
     showMsg.innerHTML = 'Under Weight'
   } else if (bmi >= 18.6 && bmi <= 24.9) {
    showMsg.innerHTML = 'Normal Range'
   } else if (bmi > 24.9){
    showMsg.innerHTML = 'OVERWEIGHT'
   } else {
    showMsg.innerHTML = ''
   }
}
})

