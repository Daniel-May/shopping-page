// JS FILE FOR INDEX.HTML

const shoppingCart = document.querySelector('#cart-items');
const currentCartItems = document.querySelectorAll('#cart-items li');
const addToCartButton = document.querySelectorAll('button.buy-item');
const removeFromCartButton = document.querySelectorAll('img.remove-button');


for (var i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', createCartItem)
}


function createCartItem() {

    const newItem = document.createElement('li');
    newItem.className = 'cart-item';

    const newItemImage = document.createElement('img');
    newItemImage.src = "images/gift-icon.png";
    newItemImage.alt = "an icon of a blue gift box and ribbon";
    

    const cancelItemImage = document.createElement('img');
    cancelItemImage.className = "remove-button"
    cancelItemImage.src = "images/cancel-icon.png";
    cancelItemImage.alt = "red remove icon"

    newItem.appendChild(newItemImage);
    newItem.appendChild(cancelItemImage);

    shoppingCart.appendChild(newItem);

}


for (var i = 0; i < removeFromCartButton.length; i++) {
    removeFromCartButton[i].addEventListener('click', removeCartItem)
}

function removeCartItem() {
    
    if (currentCartItems.length >= 1){

    shoppingCart.removeChild(shoppingCart.lastElementChild);

    }
}







    

 