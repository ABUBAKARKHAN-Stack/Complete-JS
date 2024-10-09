import { getProductsLS } from "./getProductsLS";
import { updatedCartProd } from "./updatedCartProd";
import { showToast } from "./showToast";

// Fetch products from localStorage (LS) when the script runs
getProductsLS();

export const addToCart = (e, stock, id) => {
    // Get the current product element using its unique ID
    const currProdElem = document.querySelector(`#card${id}`);

    // Fetch the existing products stored in localStorage
    const arrProductsLS = getProductsLS();

    // Get the quantity and price from the current product element
    let quantity = currProdElem.querySelector('.product-quantity').innerText;
    let price = currProdElem.querySelector('.product-disc-price').innerText;

    // Convert quantity to a number for calculations
    quantity = Number(quantity);

    // Remove the currency symbol from the price and convert it to a number
    price = price.replace('$', '');

    // Check if the product already exists in the cart (localStorage)
    let existingProduct = arrProductsLS.find((currProd) => currProd.id === id);
    console.log(existingProduct);

    // If the product exists and the quantity is greater than 1, update the product's quantity and price
    if (existingProduct && quantity > 1) {
        // Update the quantity by adding the new quantity to the existing quantity
        quantity = Number(existingProduct.quantity) + Number(quantity);

        // Calculate the new total price based on the updated quantity
        price = Number((price * quantity).toFixed(2));

        // Create an updated product object with the new price and quantity
        let updatedCart = { id, price, quantity };

        // Update the existing product in the cart array with the new product details
        updatedCart = arrProductsLS.map((currProd) => {
            return currProd.id === id ? updatedCart : currProd;
        });

        showToast('add', id)

        // Store the updated cart in localStorage
        localStorage.setItem('added-product', JSON.stringify(updatedCart));
    }

    // If the product exists and no new quantity is added, return early
    if (existingProduct) {
        return;
    }


    // If the product is new, calculate the price based on the initial quantity
    price = Number((price * quantity).toFixed(2));

    // Add the new product to the cart array
    arrProductsLS.push({ id, price, quantity });

    // Store the updated cart in localStorage
    localStorage.setItem('added-product', JSON.stringify(arrProductsLS));

    // Update the displayed cart value (e.g., total items in cart, total price)
    updatedCartProd(arrProductsLS);
    showToast('add', id)
};
