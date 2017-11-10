"use strict";
console.log('Для пошуку мінімального використайте функцію min()');
console.log('Для пошуку середнього арифметичного  використайте serArfm() ');
console.log('Для підняття до степеня використайте step()');

function min() {
    var args = [];
    for (var i = 0;i < arguments.length;i++){
        args[i] = arguments[i];
        var n = i;

    }
if (n<1){console.log("Введіть мінімум  2 параметра")}
    var minn=args[0];
    for (i=1;i < arguments.length;i++){
        if(minn>=args[i])
        {
            minn=args[i];

        }

    }


    return minn;

}

function serArfm() {
    var args = [];

    for (var i = 0;i < arguments.length;i++){
        args[i] = arguments[i];
        var n = i;
    }
    if (n<1){console.log("Введіть мінімум  2 параметра")}
    var sum=0;
    for (var i = 0;i < arguments.length;i++){
        sum+=args[i];
    }


    console.log('Сума=',sum);
    console.log('Кількість чисел=',n+1);
     var s=sum/(n+1);


    return s;

}
function step() {
    var arr = [];
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
        var n = i;

    }
    var b=arr[0];
    var c=arr[1];

    if (b===0) {a=0;console.log(a);}
    else  if (n > 1) {
        console.log('Не коректний ввід')
    }
    else if (n === 0) {
        a = arr[0] * arr[0];
    } else if ( c>0) {
        for (var i = 0; i < c; i++) {
            a *= arr[0];
        }
    } else if (c < 0) {

        for (var i = 1; i < (-c); i++) {
            b*= arr[0];

        }

        a = 1 / b;

    }
    return a;
}
