/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
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


function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        default:
            return 'Неизвестная операция';
    }
}


console.log(mathOperation(5, 12, 'sum'));
console.log(mathOperation(5, 12, 'sub'));
console.log(mathOperation(5, 12, 'mult'));
console.log(mathOperation(5, 12, 'div'));
