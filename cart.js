const buttonAddMinus = document.querySelector('.add-sub-buttons');
const amountDisplay = document.querySelector('.amount-display')
const cartCounterIcon = document.querySelector('.nav__cart-counter');
const addToCartButton = document.querySelector('.add-to-cart-button');

let counter = 0;

buttonAddMinus.addEventListener('click',addMinusButton);
addToCartButton.addEventListener('click', addToCart);

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