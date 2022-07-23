const buttonAddMinus = document.querySelector('.add-sub-buttons');
const amountDisplay = document.querySelector('.amount-display')
const cartCounterIcon = document.querySelector('.nav__cart-counter');
const addToCartButton = document.querySelector('.add-to-cart-button');
const cart = document.querySelector('.nav__cart');
const profileIcon = document.querySelector('.nav__avatar');
const cartComponent = document.querySelector('.nav__cart-component');

let counter = 0;

buttonAddMinus.addEventListener('click',addMinusButton);
addToCartButton.addEventListener('click', addToCart);
cart.addEventListener('click', showAndHideCart);
profileIcon.addEventListener('click', showAndHideCart);


//Aumenta o disminuye el contador segun el botón seleccionado
function addMinusButton(e){
    if(e.target.classList.contains('add-button') || e.target.classList.contains('add-button-img')) counter++;

    if(e.target.classList.contains('minus-button') || e.target.classList.contains('minus-button-img')){
        if(counter <= 0) return;
        counter--;
    }
    amountDisplay.textContent= counter;
}

function addToCart(){
    if(counter > 0){
        cartCounterIcon.classList.add('nav__cart-counter-active');
        cartCounterIcon.textContent = Number(cartCounterIcon.textContent) + counter;
    }
}

function showAndHideCart(e){
    e.preventDefault();
    cartComponent.classList.toggle('cart-active');
    e.stopPropagation();
}