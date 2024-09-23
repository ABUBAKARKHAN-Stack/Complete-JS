const validatePassword = (string)=>{
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}/gm.test(string)
}
console.log(validatePassword('passsword')); // False
console.log(validatePassword('Password')); // False
console.log(validatePassword('Passwor9d')); // False
console.log(validatePassword('Passw@0d')); // True

const indPhone = (string)=>{
    return /(.*[+]91)(.*[- \s])(.*\d)/gm.test(string)
}
console.log(indPhone('+91-987659994310'));