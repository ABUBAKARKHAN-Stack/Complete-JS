// Declarative Way # 1
class Product1 {
    constructor(name, cost, discount, materials) {
        this.name = name
        this.cost = cost
        this.discount = discount
        this.materials = materials
    }
}
let pencil = new Product1('Pencil', 20, '30%', 'Wood')
console.log(pencil);

// Expressional Way 2
const animal = class Wild {
    constructor(name, isWild, isLazy, isActive) {
        this.name = name
        if (this.isWild = isWild) {
            console.info(`${this.name} is Wild Animal`);
        } else {
            console.info(`${this.name} is Not Wild Animal`);
        }
        this.isWild = isWild
        this.isLazy = isLazy
        this.isActive = isActive
    }
}
let animalType = new animal('Tiger', true, false, true)
console.log(animalType);

// Getter And Setter Method 

class Product2 {
    constructor(name, cost, discount, materials) {
        this.name = name
        this.cost = cost
        this.discount = discount
        this.materials = materials
    }
    // Getter Func
    get getDiscountValue() {
        return this.discount
    }
    // Setter Func
    set setDiscountValue(value) {
        this.discount = value
    }
    discountValue() {
        return this.discount * this.cost / 100
    }
}
let Bed = new Product2('Bed', 2020, 10, 'Wood')
console.log(Bed);

// Extend Keyword

class Product {
    constructor(itemName) {
        console.log('Passed By Stationary' +  itemName );
        this.itemName = itemName
    }
    getItemName() {
        return this.itemName + 'is a Product'
    }
}
class Stationary extends Product {
    constructor(itemName) {
        super(itemName)
    }
    getItemName() {
        return this.itemName + ' is a Stationary Product'
    }
}
let pen = new Stationary('Pen')
// let scale = new Stationary('Scale')