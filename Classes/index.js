// const rabbit = {
//     jump : true,

// }
// const animal = {
//     eats : true
// }
// rabbit._proto_ = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log('Object Is Created');
    }
    eats(){
        console.log(`${this.name} Likes To Eat Meat`);
    }
    nature(){
        console.log(`Mostly ${this.name} Are wild`);
    }
}
let a = new Animal('Tiger')
console.log(a);
class Bull extends Animal {
    constructor(name) {
        super(name)
        console.log('Object Is Created and He is a Lepord');
    }
}
let l = new Animal('Lepord')
console.log(l);