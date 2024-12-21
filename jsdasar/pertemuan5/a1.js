function jumlahKubus(a, b, c) {
    return (a*a*a) + (b*b*b) + (c*c*c);
}
alert("selamat datang di web saya");
var tanya = true;
while (tanya) {
    var a = parseInt(prompt("masukan nilai a"));
    var b = parseInt(prompt("masukan nilai b"));
    var c = parseInt(prompt("masukan nilai c"));

    var hasil = jumlahKubus(a, b, c);

    alert("jadi hasil dari " + a + " ditambah " + b + " ditambah " + c + " adalah " + hasil);
    alert("hasilnya adalah " + hasil);
    document.write("hasilnya adalah " + hasil);

    tanya = confirm("apakah anda ingin mengulang?");
}
alert("terima kasih sudah berkunjung");
