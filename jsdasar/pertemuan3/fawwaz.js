//JANGAN LUPA MEMASUKKAN PARSEINT UNTUK CASUS DIBAWAH
var angka=parseInt(prompt("masukkan angka"));

// if (angka === 5){
//     console.log("angka lebih besar dari 5");
// } else if (angka === 4){
//     console.log("angka lebih kecil dari 5");
// } else {
//     console.log("angka sama dengan 5");
// }

switch( angka ) {
    case 1 :
        alert("anda memasukkan nomer 1");
        break;
    case 2 :
        alert("anda memasukkan nomer 2");
        break;
    case 3 :
        alert("anda memasukkan nomer 3");
        break;
    default :
        alert("anda memasukkan nomer lain");
        break;
}