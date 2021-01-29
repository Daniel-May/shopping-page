// JS FILE FOR INDEX.HTML

const shoppingCart = document.querySelector('#cart-items');
const currentCartItems = document.getElementsByClassName('cart-item');
const addToCartButton = document.querySelectorAll('button.buy-item');
const removeFromCartButton = document.getElementsByClassName('remove-button');
const itemDescription = $('.shop-item p').html();
const emptyCartMessage = document.createElement('p');
emptyCartMessage.innerHTML = 'Your cart is empty.';

const cartTotal = document.querySelector('#cart-total');


// EMPTY CART ITEM DISPLAY MESSAGE
shoppingCart.appendChild(emptyCartMessage);

//for (var i = 0; i < 10; i++){
//if (currentCartItems.length === 0){

//    shoppingCart.appendChild(emptyCartMessage);

//} else if (currentCartItems.length >= 1) {

//    shoppingCart.removeChild(emptyCartMessage);
//}
//}


    

// SHOPPING AREA BUTTON EVENT LISTENER

for (var i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', createCartItem);
    
}


function createCartItem(event) {

    //CREATE CART LI ITEM
    const newItem = document.createElement('li');
    newItem.className = 'cart-item';
    //newItem.innerHTML = event.target.value;

    //GET AND SET SHOP/CART ITEM VALUE 
    const itemValue = document.createElement('p');
    itemValue.innerHTML = event.target.value;

    //CREATE CART ITEM DESCRIPTION 
    const p = document.createElement('p');
    p.innerHTML = itemDescription;

    //CREATE CANCEL CART ITEM BUTTON
    const cancelItemImage = document.createElement('img');
    cancelItemImage.className = "remove-button";
    cancelItemImage.src = "images/cancel-icon.png";
    cancelItemImage.alt = "red remove icon";
   
    newItem.appendChild(itemValue);
    newItem.appendChild(p);
    newItem.appendChild(cancelItemImage);

    shoppingCart.appendChild(newItem);

    emptyCartMessage.className = 'hide-empty-cart';
    

    //emptyCart();
}

//function emptyCart() {

   // if (removeFromCartButton.length === 0) {
    //    emptyCartMessage.classList.remove('hide-empty-cart');

    //} else {
    //    emptyCartMessage.className = 'hide-empty-cart';
    //} 
        
//}




// REMOVE CART ITEMS BUTTON 

//shoppingCart.addEventListener('click', (e) => {

//    if (e.target.className === 'remove-button'){
//        const li = e.target.parentNode;
//        const ol = li.parentNode;
//        ol.removeChild(li);

//    }



//});

// REMOVE CART ITEMS BUTTON
shoppingCart.addEventListener('click', (e) => {

    if (e.target.className === 'remove-button'){
        const li = e.target.parentNode;
        const ol = li.parentNode;
        ol.removeChild(li);
    

        // Get cart's current items
        const currentCartItems = document.getElementsByClassName('cart-item');

        // If cart items less then or equal to 0 then hide
        if (currentCartItems.length <= 0) {
          emptyCartMessage.classList.remove('hide-empty-cart');
        }
    }
})




