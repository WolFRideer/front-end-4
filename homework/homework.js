"use strict";
console.log('Для пошуку мінімального використайте функцію min()');
console.log('Для пошуку середнього арифметичного  використайте serArfm() ');
console.log('Для підняття до степеня використайте step()');

function min() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
        var n = i;

    }
    if (n < 1) {
        console.log("Введіть мінімум  2 параметра")
    }
    var minn = args[0];
    for (i = 1; i < arguments.length; i++) {
        if (minn >= args[i]) {
            minn = args[i];

        }

    }


    return minn;

}

function serArfm() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
        var n = i;
    }
    if (n < 1) {
        console.log("Введіть мінімум  2 параметра")
    }
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += args[i];
    }


    console.log('Сума=', sum);
    console.log('Кількість чисел=', n + 1);
    var s = sum / (n + 1);


    return s;

}

function step() {
    var arr = [];
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
        var n = i;

    }
    var b = arr[0];
    var c = arr[1];

    if (b === 0) {
        a = 0;
        console.log(a);
    }
    else if (n > 1) {
        console.log('Не коректний ввід')
    }
    else if (n === 0) {
        a = arr[0] * arr[0];
    } else if (c > 0) {
        for (var i = 0; i < c; i++) {
            a *= arr[0];
        }
    } else if (c < 0) {

        for (var i = 1; i < (-c); i++) {
            b *= arr[0];

        }

        a = 1 / b;

    }
    return a;
}


var arr = [47, 109, 32, 39, 1, 0];
var l = arr.length;

console.log(l);


function isEmply(arr) {
    for (var key in arr) {
        return true;
    }
    return false;
}

var codeObj = [45, 109, 32, 39, 1, 0];
arr[codeObj.length + 17] = 95;

function sData(arr) {
    var sum = 0;
    if (isEmply(arr)) {
        for (var key in arr) {
            sum += +arr[key];
        }
        return sum;
    }

}

var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
var sh=data.length-1;
function sort(data) {
    for (var i=0; i< sh;i++) {
        for (var j = 0; j < sh - i; j++) {
            if (data[j] < data[j + 1]) {
                var c = data[j];
                data[j] = data[j + 1];
                data[j + 1] = c;

            }

        }
    }
    return data;

}

