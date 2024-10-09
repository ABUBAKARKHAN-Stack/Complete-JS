const cartValue = document.querySelector('.cart-val')
export const updatedCartProd = (cartProduct) => {
    return cartValue.textContent = cartProduct.length
    
}