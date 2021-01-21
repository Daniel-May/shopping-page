// JS FILE FOR INDEX.HTML

const addToCartButton = document.querySelectorAll(".buy-item");
const shoppingCart = document.querySelector("#cart-items");
const cartItem = document.querySelectorAll(".cart-item");
const newCartItem = function() {

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



addToCartButton.addEventListener('click', newCartItem());