// JS FILE FOR INDEX.HTML

const shoppingCart = document.querySelector('#cart-items');   
const currentCartItems = document.getElementsByClassName('cart-item');
const currentCartItemsPrices = document.getElementsByClassName('item-price');
const addToCartButton = document.querySelectorAll('button.buy-item');
const removeFromCartButton = document.getElementsByClassName('remove-button');
const itemDescription = $('.shop-item p').html();
const emptyCartMessage = document.createElement('p');
emptyCartMessage.innerHTML = 'Your cart is empty.';

const cartTotal = document.getElementById('cart-total');
let totalValue = document.createElement('span');
totalValue.className = 'running-total';
cartTotal.appendChild(totalValue);



// EMPTY CART ITEM DISPLAY MESSAGE
shoppingCart.appendChild(emptyCartMessage);
    

// SHOPPING AREA BUTTON EVENT LISTENER

for (var i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', createCartItem);
    
}


function createCartItem(event) {

    //CREATE CART LI ITEM
    const newItem = document.createElement('li');
    newItem.className = 'cart-item';

    //GET AND SET SHOP/CART ITEM VALUE 
    const itemValue = document.createElement('p');
    itemValue.innerHTML = event.target.value;
    itemValue.className = 'item-price';

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
    
    updateTotal();
 
}

function updateTotal(){

    // VARIABLE TO HOLD CURRENT TOTAL
    let currentTotal = 0;

    //GET CURRENT CART ITEMS PRICES
    const currentCartItemsPrices = document.getElementsByClassName('item-price');
  
    //LOOP THROUGH CURRENT CART ITEMS AND PRICES
    for (var i = 0; i < currentCartItemsPrices.length; i++) {

    //UPDATE CURRENT TOTAL WITH SELECTED ITEM PRICE ON EACH LOOP    
    currentTotal += parseInt(currentCartItemsPrices[i].textContent);

    totalValue.innerHTML = currentTotal;
   
    
    }
};



// REMOVE CART ITEMS BUTTON
shoppingCart.addEventListener('click', (e) => {

    if (e.target.className === 'remove-button'){
        const li = e.target.parentNode;
        const ol = li.parentNode;
        ol.removeChild(li);
    
        // GET CARTS CURRENT ITEMS
        const currentCartItems = document.getElementsByClassName('cart-item');

        // IF CART ITEMS LESS THAN OR EQUAL TO 0 THEN SHOW EMPTY CART MESSAGE
        if (currentCartItems.length <= 0) {
          emptyCartMessage.classList.remove('hide-empty-cart');
        }


    }
});





shoppingCart.addEventListener('click', (e) =>{

    //VARIABLE TO HOLD CURRENT TOTAL
    let runningTotal = document.querySelector('.running-total');
    runningTotal = runningTotal.innerHTML;


    if (e.target.className === 'remove-button') {
    
    //GET CURRENT CART ITEMS PRICES
    const currentCartItemsPrices = document.getElementsByClassName('item-price');

    for (var i = 0; i < currentCartItemsPrices.length; i++) {
        
        runningTotal -= parseInt(currentCartItemsPrices[i].innerHTML);

        totalValue.innerHTML = runningTotal;
    }

    console.log(runningTotal);
}
});



