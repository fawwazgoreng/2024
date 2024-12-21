var tanya = true;

while (tanya) {

    // menangkap pilihan player

    var player = prompt("masukkan gajah semut / orang")

    //menangkap pilihan computer
    // memilih pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    var hasil = "";

    // menentukan rules
    if (player == comp) {
        hasil = 'seri';
    } else if (player == 'orang') {
        //  if( comp == 'gajah') {
        //      hasil = 'kalah'
        //  } else {
        //      hasil = 'menang'
        //  }

        hasil = (comp == 'semut' ? 'menang!' : 'kalah!');
    } else if (player == 'gajah') {
        hasil = (comp == 'orang' ? 'menang!' : 'kalah!');
    } else if (player == 'semut') {
        hasil = (comp == 'gajah' ? 'menang!' : 'kalah!');
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }

    //tampilkan hasil 
    alert('kamu memilih : ' + player + ' dan komputer memilih : ' + comp + '\n' + 'maka hasilnya kamu :' + hasil);
    tanya = confirm('apakah kamu ingin bermain lagi?');
}
alert("terimakasih sudah bermain");