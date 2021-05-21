/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

'use strict';

outer: for (let i = 2; i < 101; i++) {
    for (let j = 2; j < i/2 + 1; j++) {
        if (i % j === 0) {
            continue outer;
        }     
    }
    console.log(i);
}
