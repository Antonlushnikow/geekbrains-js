/*
Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/

'use strict';

function sum(a, b) {
    return a + b;
}


function mult(a, b) {
    return a * b;
}


function sub(a, b) {
    return a - b;
}


function div(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return 'Ошибка деления на ноль';
    }
}

console.log(sum(5, 12));
console.log(sub(5, 12));
console.log(mult(5, 12));
console.log(div(5, 12));
