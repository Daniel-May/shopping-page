// JS FILE FOR INDEX.HTML

const shoppingCart = document.querySelector('#cart-items');   
const currentCartItems = document.getElementsByClassName('cart-item');
const currentCartItemsPrices = document.getElementsByClassName('item-price');
const addToCartButton = document.querySelectorAll('button.buy-item');
const removeFromCartButton = document.getElementsByClassName('remove-button');
const itemDescription = $('.shop-item p').html();
const emptyCartMessage = document.createElement('p');
emptyCartMessage.innerHTML = 'Your cart is empty.';
emptyCartMessage.className = "visible";

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
    let currentTotal = 0.00;
   
    //LOOP THROUGH CURRENT CART ITEMS AND PRICES
    for (var i = 0; i < currentCartItemsPrices.length; i++) {
    
    //UPDATE CURRENT TOTAL WITH SELECTED ITEM PRICE ON EACH LOOP    
    currentTotal += parseFloat(currentCartItemsPrices[i].textContent);  
    
    }

    //UPDATE GLOBAL TOTAL VARIABLE WIT AMOUNT PER ITEM
    totalValue.innerHTML =  currentTotal;

};


// REDUCE CART TOTAL FUNCTION BASED ON REMOVE ITEM CLICKS

shoppingCart.addEventListener('click', (e) =>{

    //GET CURRENT TOTAL IN CART, THIS IS OBTAINED FROM A GLOBAL SCOPE VARIABLE IN totalValue
    let runningTotal = parseFloat(totalValue.innerHTML);

    //VARIABLE TO GET THE VALUE OF THE CART ITEM WHICH HAS HAD THE REMOVE BUTTON CLICKED
    let itemValue = parseFloat(e.target.previousSibling.previousSibling.innerHTML);  
    
    //IF STATEMENT TO UPDATE VALUES IF THE REMOVE BUTTON AS BEEN CLICKED. //THE INITIAL EVENT LISTENER IS ON SHOPPING CART SO THIS IS TO MAKE SURE
    if (e.target.className === 'remove-button') {

    //CURRENT CART TOTAL MINUS THE ITEM VALUE OF CART ITEM WHICH HAS BEEN CLICKED
    runningTotal -= itemValue;
    
    //UPDATE GLOBAL VALUE VARIABLE WITH RUNNING TOTAL
    totalValue.innerHTML = runningTotal;
    
    }

});



// FUNCTION TO REMOVE ITEMS FROM CART
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
          emptyCartMessage.className = "visible";
        }


    }
});



