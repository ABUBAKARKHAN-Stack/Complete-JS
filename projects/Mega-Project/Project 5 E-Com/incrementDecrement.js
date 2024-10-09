import { getProductsLS } from "./getProductsLS"
import { updateCartTotal } from "./updateCartTotal"
export const incrementDecrement = (e, id, stock, price) => {
    const currCartCard = document.querySelector(`#card${id}`)
    const productQuantity = currCartCard.querySelector('.cart-product-quantity')
    const productPrice = currCartCard.querySelector('.product-cart-total-price')

    let quantity = 1;
    let localStoragePrice = 0;


    const cartProductsLS = getProductsLS();
    let existingProd = cartProductsLS.find((currProd) => currProd.id === id)

    if (existingProd) {
        quantity = existingProd.quantity
        localStoragePrice = existingProd.price
    } else {
        localStoragePrice = price
        price = price
    }


    if (e.target.classList.contains('increment-cart-product')) {
        if (quantity < stock) {
            quantity += 1
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock
        }
    }

    if (e.target.classList.contains('decrement-cart-product')) {
        if (quantity > 1) {
            quantity -= 1
        }
    }

    // Update Actual LS Price
    localStoragePrice = price * quantity
    localStoragePrice = Number(localStoragePrice.toFixed(2))

    let updatedCart = { id, price: localStoragePrice, quantity };

    // Update the existing product in the cart array with the new product details
    updatedCart = cartProductsLS.map((currProd) => {
        return currProd.id === id ? updatedCart : currProd;
    });

    // Store the updated cart in localStorage
    localStorage.setItem('added-product', JSON.stringify(updatedCart));

    productQuantity.textContent = quantity
    productPrice.textContent = localStoragePrice
    updateCartTotal()
}