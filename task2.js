/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

'use strict';

let basket = [
    {name: 'name1', price: 1000},
    {name: 'name2', price: 2000},
    {name: 'name3', price: 4000},
    {name: 'name4', price: 500}
];


function countBasketPrice(arr) {
    let sum = arr.reduce(function(acc, elem) {
        return acc + elem.price;
    }, 0);
    return sum;
}


console.log(countBasketPrice(basket));
