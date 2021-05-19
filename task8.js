/*
С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

'use strict';

function power(val, pow) {
    if (pow === 0) {
        return 1;
    } else {
        return val * power(val, --pow);
    }
}


console.log(power(2, 6));
