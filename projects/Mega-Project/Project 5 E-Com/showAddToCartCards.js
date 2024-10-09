import products from './api/Products.json'
import { getProductsLS } from './getProductsLS'
import { fetchQuantityCartLS } from './fetchQuantityCartLS'
import { removeTheCardFromCart } from './removeTheCardFromCart'
import { incrementDecrement } from './incrementDecrement'
import { updateCartTotal } from './updateCartTotal'

let cartProducts = getProductsLS()
// console.log(cartProducts);
// console.log(products);

let filterProducts = products.filter((currProd) => {
    return cartProducts.some((currElem) => currElem.id === currProd.id)
})
// console.log(filterProducts);

const productCartContainer = document.querySelector('.cartProductContainer')
const productCartTemplate = document.querySelector('.product-cart-template')

const showCartProducts = () => {
    filterProducts.map((product) => {
        const { name, image, category, id, price, stock } = product

        const lSActualData = fetchQuantityCartLS(id, price)
        const templateClone = document.importNode(productCartTemplate.content, true)
        templateClone.querySelector('#cardValue').setAttribute('id', `card${id}`)
        templateClone.querySelector('.product-cart-category').textContent = category
        templateClone.querySelector('.product-cart-img').src = image
        templateClone.querySelector('.product-cart-img').alt = name
        templateClone.querySelector('.product-cart-name').textContent = name
        templateClone.querySelector('.product-cart-total-price').textContent = lSActualData.price
        templateClone.querySelector('.cart-product-quantity').textContent = lSActualData.quantity

        templateClone.querySelector('.stock-quantity-cart-elem')
            .addEventListener('click', (e) => {
                incrementDecrement(e, id, stock , price)
            })

        templateClone
            .querySelector('.remove-to-cart')
            .addEventListener('click', () => {
                removeTheCardFromCart(id)
            })

        productCartContainer.appendChild(templateClone)
    })
}

showCartProducts()

updateCartTotal()


