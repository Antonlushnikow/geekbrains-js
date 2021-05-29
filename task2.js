/*
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

'use strict';


class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}


class Basket {
    constructor (...products) {
        this.products = products;
    }

    showBasket() {
        console.log(this.products);
    }

    getFullPrice() {
        let sum = this.products.reduce(function(acc, elem) {
            return acc + elem[0].price * elem[1];
        }, 0);
        return sum;
    }
}

let product1 = new Product('iPhone 6S', 120000);
let product2 = new Product('Xiaomi Mi 9', 20000);
let product3 = new Product('Samsung Galaxy S7', 100000);

let basket1 = new Basket ([product1, 2], [product3, 1]);
let basket2 = new Basket ([product1, 1], [product2, 2]);


basket1.showBasket();

/*

[
  [ Product { name: 'iPhone 6S', price: 120000 }, 2 ],
  [ Product { name: 'Samsung Galaxy S7', price: 100000 }, 1 ]
]

*/

basket2.showBasket();

/*
[
  [ Product { name: 'iPhone 6S', price: 120000 }, 1 ],
  [ Product { name: 'Xiaomi Mi 9', price: 20000 }, 2 ]
]
*/

console.log(basket1.getFullPrice());  // 340000
console.log(basket2.getFullPrice());  // 160000
