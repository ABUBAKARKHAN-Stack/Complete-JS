import { getProductsLS } from "./getProductsLS"
import { updatedCartProd } from "./updatedCartProd"
import { updateCartTotal } from "./updateCartTotal"
import { showToast } from "./showToast"
export const removeTheCardFromCart = (id) => {
    let cartProducts = getProductsLS()
    cartProducts = cartProducts.filter((currCard) => currCard.id !== id)
    const removeCard = document.querySelector(`#card${id}`)
    removeCard.remove()
    // Show Toast When Product Remove From Cart
    showToast('remove', id)
    updatedCartProd(cartProducts)
    localStorage.setItem('added-product', JSON.stringify(cartProducts));
    updateCartTotal()
}
