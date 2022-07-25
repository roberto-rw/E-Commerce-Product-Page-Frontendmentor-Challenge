const buttonAddMinus = document.querySelector('.add-sub-buttons');
const amountDisplay = document.querySelector('.amount-display')
const cartCounterIcon = document.querySelector('.nav__cart-counter');
const addToCartButton = document.querySelector('.add-to-cart-button');
const cartIcon = document.querySelector('.nav__cart-icon');
const cartComponent = document.querySelector('.nav__cart-component');
const tableBody = document.querySelector('.nav__cart-component-table-body');
const cartEmptyMessage = document.querySelector('.nav__cart-component-table-body-cart-empty-message');
const navMenu = document.querySelector('.nav__menu');
const navMenuHamburger = document.querySelector('.nav__hamburger');
const navHideMenuButton = document.querySelector('.nav__menu-hide-button');

let counter = 0;

buttonAddMinus.addEventListener('click',addMinusButton);
addToCartButton.addEventListener('click', addToCart);
cartIcon.addEventListener('click', showAndHideCart);
cartComponent.addEventListener('click', removeArticle);
navMenuHamburger.addEventListener('click', navHamburguerClick);
navHideMenuButton.addEventListener('click', navHideMenu);


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
    renderCart();
}

function renderCart(){
    let total = 125 * Number(cartCounterIcon.textContent);

    let row = `<tr class="nav__cart-component-table-row">
                    <td class="nav__cart-component-table-cell"><img src="/images/image-product-1-thumbnail.jpg" alt="" class="nav__cart-component-table-cell-img"></td>
                    <td class="nav__cart-component-table-cell"> Fall Limited Edition Sneakers $125.00 x ${cartCounterIcon.textContent} $${total}</td>
                    <td class="nav__cart-component-table-cell"><img src="/images/icon-delete.svg" alt="" class="nav__cart-component-table-cell-remove-icon"></td>
                </tr>
                <button class="nav__cart-component-table-body-checkout-button">Checkout</button>`;

    //Verifica si el carrito se encuentra vacio antes de renderizarlo
    if(Number(cartCounterIcon.textContent) < 1){
        cartEmptyMessage.classList.add('active');
        cartCounterIcon.classList.remove('nav__cart-counter-active');
        tableBody.innerHTML = '';
    }else{
        tableBody.innerHTML = row;
        cartEmptyMessage.classList.remove('active');
    }
}

function showAndHideCart(e){
    cartComponent.classList.toggle('active');
}

function removeArticle(e){
    if(e.target.classList.contains('nav__cart-component-table-cell-remove-icon')){
        cartCounterIcon.textContent = Number(cartCounterIcon.textContent) - 1;
        renderCart();  
    }  
}

function navHamburguerClick(){
    navMenu.classList.add('nav__menu--enable');
}

function navHideMenu(){
    navMenu.classList.remove('nav__menu--enable');
}