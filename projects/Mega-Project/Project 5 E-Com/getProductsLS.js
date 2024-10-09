import { updatedCartProd } from "./updatedCartProd";
export const getProductsLS = () => {
    let productsLS = localStorage.getItem('added-product')
    if (!productsLS) return [];
    productsLS = JSON.parse(productsLS)

    // updated cart-value 
    updatedCartProd(productsLS)
    return productsLS
}