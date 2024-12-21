//pengulangan for
var jmlAngkot=10;
var angkotBeroperasi=6;
var noAngkot=1;

while (noAngkot<=angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for (angkotBeroperasi =angkotBeroperasi+1; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++) {
    console.log('Angkot No. ' + angkotBeroperasi + ' sedang tidak beroperasi.');
}

//if else

var angka = prompt('Masukkan angka : ');
if (angka > 5) {
    document.write('Angka lebih besar dari 5');
} else {
    console.log('Angka lebih kecil dari 5');
}

if (angka % 2 == 0) {
    console.log("angka anda genap")
} else {
    console.log("angka anda ganjil")
}