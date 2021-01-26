// JS FILE FOR INDEX.HTML

const shoppingCart = document.querySelector('#cart-items');
const currentCartItems = document.querySelectorAll('#cart-items li');
const addToCartButton = document.querySelectorAll('button.buy-item');
const removeFromCartButton = document.querySelectorAll('img.remove-button');
const itemDescription = $('.shop-item p').html();

// SHOPPING AREA BUTTON EVENT LISTENER

for (var i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', createCartItem);
}


function createCartItem(event) {

    //CREATE CART LI ITEM
    const newItem = document.createElement('li');
    newItem.className = 'cart-item';
    newItem.innerHTML = event.target.value;

    //CREATE CANCEL CART ITEM BUTTON
    const cancelItemImage = document.createElement('img');
    cancelItemImage.className = "remove-button";
    cancelItemImage.src = "images/cancel-icon.png";
    cancelItemImage.alt = "red remove icon";

    const p = document.createElement('p');
    p.innerHTML = itemDescription;


    newItem.appendChild(cancelItemImage);
    newItem.appendChild(p);
    shoppingCart.appendChild(newItem);
    
}



/*for (var i = 0; i < removeFromCartButton.length; i++) {
    removeFromCartButton[i].addEventListener('click', removeCartItem)
}

function removeCartItem() {
    
    if (currentCartItems.length >= 1){

    shoppingCart.removeChild(shoppingCart.lastElementChild);

    }
}
*/

shoppingCart.addEventListener('click', (e) => {

    if (e.target.className === 'remove-button'){
        const li = e.target.parentNode;
        const ol = li.parentNode;
        ol.removeChild(li);

    }

});







    

 