// function init () {
//     // let nama = "m fawwaz";
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let tampilnama = init();
// tampilnama("fawwaz");
// tampilnama("faz");



//funttion factory


function Salam(waktu) {
    return function (nama) {
        console.log( `halo ${nama}, selamat ${waktu}, semoga menyenangkan `)
    }
}

let selamatPagi = Salam("pagi");
let selamatSiang = Salam("siang");
let selamatMalam = Salam("malam");

console.dir(selamatMalam);

selamatPagi("fawwaz");

let add = (function() {
    let counter = 0;
    return function (){
    return ++counter;
   }
})();

counter =100;

console.log(add());
console.log(add());