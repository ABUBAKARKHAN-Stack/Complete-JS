//* Modular Patterns in JS

const KiranaStore = (() => {
    let itemCount = 0
    const godown = []

    return {
        add(name) {
            itemCount++
            godown.push(name)
            return `Ayub Bhai stocked item: ${name}`
        },
        count() {
            return `Item Count: ${itemCount}`
        },
        list() {
            return `List: ${godown.slice().join(" ")}`
        }

    }
})()

/* 
console.log(KiranaStore.add("Tea 10 packs."))
console.log(KiranaStore.add("Ginger 10kgs."))
console.log(KiranaStore.count())
console.log(KiranaStore.list());

console.log("Can Direct Access Godown ?: ", typeof KiranaStore.godown);
console.log("Can Direct Access Item Count ?: ", typeof KiranaStore.itemCount);
*/

const AccountBook = (() => {
    const records = []
    let accesslog = []

    //! Private Method
    function logAccess(action) {
        accesslog.push(`[${new Date().toISOString().slice(0, 10)}] - ${action}`)
    }

    //* Public Methods
    function store(doc) {
        logAccess(`Stored: ${doc}`)
        records.push(doc)
    }

    function retrieve(index) {
        logAccess(`Retrieved: index ${index}`)
        return records[index] || "Not found"
    }

    function getRecordCount() {
        logAccess(`Record Count: ${records.length}`)
        return records.length
    }

    function getAccessLog() {
        return accesslog.slice().join(". ")
    }

    return {
        store,
        retrieve,
        count: getRecordCount,
        log: getAccessLog
    }
})()

/*
AccountBook.store("Sugar 2kg")
AccountBook.store("Rice 5kg")

console.log(`Ayub bhai retrieve: ${AccountBook.retrieve(0)}`);
console.log(`Count: ${AccountBook.count()}`);
console.log(`Logs: ${AccountBook.log()}`);
*/

//* Simulation And Dependency Injection

const AyubMart = {}


AyubMart.Inventory = (() => {
    const items = []

    function addItem(item) {
        items.push(item)
        console.log(`${item.name} we're added into inventory.`);
    }

    function getItem(index) {
        return items[index] || null
    }

    function listItem() {
        return `Inventory: ${items.map((item) => item.name).join(', ')}`
    }

    function totalItems() {
        return items.length
    }


    return {
        add: addItem,
        get: getItem,
        list: listItem,
        count: totalItems
    }

})()

AyubMart.BillingCalculator = ((Inv) => {
    function bulkDiscount(quantity, itemIdx) {
        const item = Inv.get(itemIdx)
        if (!item) return 'Item not found.'
        const total = ((quantity * item.price) * .9).toFixed(1)
        return total
    }
    return {
        bulkDiscount
    }
})(AyubMart.Inventory)


/* 
AyubMart.Inventory.add({
    name: "Laptop",
    price: 1000
})
AyubMart.Inventory.add({
    name: "Iphone",
    price: 7000
})

console.log(AyubMart.Inventory.list());
console.log(AyubMart.BillingCalculator.bulkDiscount(10, 1));

*/