const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    productField.value = '';
    const quantity = quantityField.value;
    quantityField.value = '';
    displayProduct(product, quantity);
    saveCartLocal(product, quantity)

}

const displayProduct = (product, quantity) =>{
    const container = document.getElementById('container');
    const li =document.createElement('li');
    li.innerHTML = `${product} ${quantity}`
    container.appendChild(li);

}

const getStoredCart = () =>{
    let cart = {};
    const saveCart = localStorage.getItem('cart');
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart;
}

// for stored in localStorage
const saveCartLocal = (product, quantity) =>{
    const cart = getStoredCart();
    cart[product] = quantity;   // localStorage have paired key & value
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const displayFromLocal = () =>{
    const saveCart = getStoredCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product, quantity)
    }

}

displayFromLocal()