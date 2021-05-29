/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например, для числа 245 надо получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

'use strict'

function Number (ones, tens, hundreds) {
    this.ones = ones;
    this.tens = tens;
    this.hundreds = hundreds;
}


function numPlaces(num) {
    if (num > 999) {
        console.log('Число превышает 999');
        return {};
    }
    else {
        let ones = num % 10;
        let tens = ((num - ones) / 10) % 10;
        let hundreds = (num - tens * 10 - ones) / 100;
        return new Number(ones, tens, hundreds);
    }
}


console.log(numPlaces(123));  // Number { ones: 3, tens: 2, hundreds: 1 }
console.log(numPlaces(1223));  // Число превышает 999 {}
