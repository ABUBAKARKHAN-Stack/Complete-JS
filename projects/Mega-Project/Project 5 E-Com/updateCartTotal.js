import { getProductsLS } from "./getProductsLS";
export const updateCartTotal = () => {
    let cartProducts = getProductsLS()
    let productPrice = cartProducts.map((currProd) => currProd.price)
    let subTotal = productPrice.reduce((accu, currProd) => {
        return accu + currProd
    }, 0)
    subTotal = Number(Math.round(subTotal))
    // Store the updated Total in localStorage
    // localStorage.setItem('added-product', JSON.stringify(...cartProducts , price = subTotal));
    document.querySelector('.sub-total').textContent = `$${subTotal}`
    let tax = document.querySelector('.tax-total').innerText
    tax = parseInt(tax.replace('$', ''))
    if (productPrice.length === 0) {
        tax = 0
    } else {
        tax = 5
    }
    document.querySelector('.final-total').textContent = '$' + Math.round((tax + subTotal))
    const proceedBtn = document.querySelector('.proceed')
        proceedBtn.addEventListener('click', () => {
            alert('Order functionality is not available in this demo.');
        });
}