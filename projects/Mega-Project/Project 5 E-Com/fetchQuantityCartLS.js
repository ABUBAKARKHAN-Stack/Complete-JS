import { getProductsLS } from "./getProductsLS";
export const fetchQuantityCartLS = (id, price) => {

    let cartProducts = getProductsLS()
    let existingProducts = cartProducts.find((currProd) => currProd.id === id)
    // console.log(existingProducts);
    let quantity = 1;
    if (existingProducts) {
        quantity = existingProducts.quantity
        price = existingProducts.price
    }
    // console.log(price , quantity);
    return {quantity , price}
}