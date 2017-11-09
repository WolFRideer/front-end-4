"use strict";


function min() {
    var args = [];
    for (var i = 0;i < arguments.length;i++){
        args[i] = arguments[i];
        var n = i;

    }

    var minn=args[0];
    for (i=1;i < arguments.length;i++){
        if(minn>=args[i])
        {
            minn=args[i];

        }

    }

    console.log('min=',minn);

}

function serArfm() {
    var args = [];

    for (var i = 0;i < arguments.length;i++){
        args[i] = arguments[i];
        var n = i;
    }
    var sum=0;
    for (var i = 0;i < arguments.length;i++){
        sum+=args[i];
    }


    console.log('Suma=',sum);
    console.log('Kilkist chusel=',n+1);
     var s=sum/(n+1);

    console.log('S=',s);

}

function step() {
    var arr = [];
    var a=1;
    for (var i=0;i<arguments.length;i++) {
        arr[i] = arguments[i];
        var n=i;

    }
    if (n>1) {console.log('Ne korektnuy vvid') }
    else if (n===0) { a=arr[0]*arr[0];   console.log (a); }   else if (n===1){
        for (var i=0;i<arr[1];i++){
            a*=arr[0];
        }
        console.log (a);
    }


}