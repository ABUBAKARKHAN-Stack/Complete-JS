const templateProduct = document.querySelector('.product-template')
const cardContainer = document.querySelector('.products-container')
import { homeQuantityToggle } from "./homeQuantityToggle"
import { addToCart } from "./addToCart"
export const ProductsCard = (products) => {
    if (!products) {
        return false
    }
    products.map((currProduct) => {
        const { id, name, category, image, price, stock, description } = currProduct
        const productClone = document.importNode(templateProduct.content, true)
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`)
        productClone.querySelector('.product-name').textContent = name
        productClone.querySelector('.product-img').src = image
        productClone.querySelector('.product-img').alt = name
        productClone.querySelector('.product-category').textContent = category
        productClone.querySelector('.description').textContent = description
        productClone.querySelector('.number-stock').textContent = stock
        productClone.querySelector('.product-disc-price').textContent = `$${price}`
        productClone.querySelector('.product-curr-price').textContent = `$${Math.round(price * 3)}`

        productClone
            .querySelector('.stock-quantity-elem')
            .addEventListener('click', (e) => {
                homeQuantityToggle(e, stock, id)
            })

        productClone.querySelector('.add-to-cart')
            .addEventListener('click', (e) => {
                addToCart(e, stock, id)
            })
        cardContainer.append(productClone)
    })
}