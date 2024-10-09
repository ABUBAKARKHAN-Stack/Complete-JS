export const homeQuantityToggle = (e, stock, id) => {
    const currCardElement = document.querySelector(`#card${id}`);
    if (!currCardElement) return;
    const productQuantity = currCardElement.querySelector('.product-quantity')
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1
    if (e.target.classList.contains('increment-product')) {
        if (quantity < stock) {
            quantity += 1
        }
    }
    if (e.target.classList.contains('decrement-product')) {
        if (quantity > 1) {
            quantity -= 1
        }
    }
    productQuantity.textContent = quantity
    productQuantity.setAttribute('data-quantity', quantity)
    return quantity
}
