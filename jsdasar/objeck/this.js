// objeck dengan this

// function halo() {
//     console.log(this);
//     console.log("this");
// }
// this.halo();

// objeck literal
// var obj = {a : 10,nama : "yusuf"};
// obj.halo = function () {
//     console.log("this");
//     console.log(this);
// }
// obj.halo();

// // constructor
function Halo() {
    console.log(this);
    console.log("this");
}
var obj2 = new Halo();
var obj1 = new Halo();

// konsep this 
//keyword spesial di setiap var // array

console.log(this);
console.log(window === this);
var a = 10;
console.log(this.a);
