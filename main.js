'use strict'

// массив с товарами
let products = [
    {'name': 'iPhone 6S', 'price': 120000},
    {'name': 'Xiaomi Mi 9', 'price': 20000},
    {'name': 'Samsung Galaxy S7', 'price': 100000}
]

// объект "корзина"
let basket = {
    products: [],

    getCountProducts: function () {
        return this.products.length;
    },

    getFullPrice: function () {
        let sum = this.products.reduce(function (acc, elem) {
            return acc + elem.price;
        }, 0);
        return sum;
    }
}

const $cartTitle = document.querySelector('.cart-title');
$cartTitle.textContent = 'Корзина пуста';
const $cartContainer = document.querySelector('.cart-container');
const $cartItems = document.querySelector('.cart-items');
const $cartBody = document.querySelectorAll('.cart-body');
const $nextBtn = document.querySelector('#next');
const $prevBtn = document.querySelector('#prev');
$prevBtn.disabled = true;
const $wrapper = document.querySelector('.wrapper');


// Обновление заголовка корзины
function getCartTitle() {
    let cartText = (basket.getCountProducts()) ? 'В корзине: ' + basket.getCountProducts() +
    ' товаров на сумму ' +
    basket.getFullPrice() + ' рублей' : 'Корзина пуста';
    $cartTitle.textContent = cartText;
}


// Отрисовка позиции из БД
function drawItem(item, idx) {
    const itemHTML = `<div class="products">
    <p>${item.name}</p>
    <p>Цена: ${item.price} руб.</p>
    <button id="item-${idx}">Купить</button>
    </div><hr>`;
    
    $wrapper.insertAdjacentHTML('beforeend', itemHTML);

    const $buyBtn = document.querySelector(`#item-${idx}`);
    $buyBtn.addEventListener('click', function() {
        basket.products.push(products[idx]);
        drawBasket();
        getCartTitle();
    });
}

// цикл вывода продуктов из массива
let idx = 0;
for(let item of products) {
    drawItem(item, idx++);
}



// Отрисовка корзины
function drawBasket() {    
    $cartItems.textContent = '';
    let idx = 0;
    for (let item of basket.products) {
        drawBasketItem(item, idx++);
    }

    if(!basket.getCountProducts()) {
        $prevBtn.style.display = 'none';
        $nextBtn.style.display = 'none';
    } else {
        $prevBtn.style.display = 'block';
        $nextBtn.style.display = 'block';
    }
}


// Отрисовка элемента корзины
function drawBasketItem(item, idx) {
    const itemHTML = `<hr><div class="basket-item">
    <p>${item.name}</p>
    <p>Цена: ${item.price} руб.</p>
    <button data-id="${idx}">Удалить</button>
    </div>`;
    $cartItems.insertAdjacentHTML('beforeend', itemHTML);


}



// удаление из корзины
$cartItems.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);
        basket.products = basket.products.filter(function (item, i) {
            return i !== index;
        });
    drawBasket();
    getCartTitle();         
    }
});

// $cartTitle.addEventListener('click', drawBasket);


// назначение отрисовки корзины по нажатию на заголовок корзины
$cartTitle.addEventListener('click', function() {    
    if($cartContainer.style.display === 'block') {
        $cartContainer.style.display = 'none';
    }
    else {
        $cartContainer.style.display = 'block';
    }
    drawBasket();
});


let start = 0;

//  навигация по корзине
$cartContainer.addEventListener('click', function(e){

    if(e.target.id === "next" && start < 2) {
        $cartBody[start].style.display = 'none';
        $cartBody[++start].style.display = 'block';
        
    }
    if(e.target.id === "prev") {
        $cartBody[start].style.display = 'none';
        $cartBody[--start].style.display = 'block';
    }

    $prevBtn.disabled = (start !== 0) ? false: true;
    $nextBtn.textContent = (start == 2) ? 'Заказать': 'Далее';



});
