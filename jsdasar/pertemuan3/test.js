// var p = "";
// for( var i = 1; i <= 10; i++) {
//     for( var j = 0; j < i; j++){
//         p += "*";
//     }
//     p += "\n";
// }
// for( var i = 10; i >= 1; i--) {
//     for( var j = 0; j < i; j++){
//         p += "*";
//     }
//     p += "\n";
// }

// console.log(p);

// var a = "";
// var b = "";
// for (var i = 0; i <= 10; i++)  {
//     for (var t = 0; t <= i; t++) {
//         a += "* ";
//     } a += "*\n";
//     for (var j = 10; j > i; j--) {
//         b += "* ";
//     } b += "*\n";
// }

// console.log(a, b);

for (var h = 0; h <= 10; h++) {
    var s ="";
    var b ="";
    if (h % 2 != 0) {
        for (var i = 0; i <(9-h)/2; i++) {
            s =s + " ";
        }
        for (var j = 0; j < h; j++) {
            b =b+"*";
        }
        console.log(s+b);
    }
}

