let tanya = true;

while (tanya) {
    let comp = Math.floor(Math.random() * 10) + 1;
    var kesempatan = 3;
    hasil = "";
    while (kesempatan >= 1) {
        let tebakan = parseInt(prompt('Tebak angka antara 1-10: \n kamu punya '
            + kesempatan + ' kesempatan'));
        if (tebakan == "" || tebakan > 10 || tebakan < 1 || tebakan == null) {
            hasil = "anda goblog";
            alert(hasil);
            break;
        }
        else if (tebakan == comp) {
            hasil = "selamat jawaban anda benar";
            alert(hasil);
            break;
        } else if (tebakan > comp) {
            hasil = "tebakan anda terlalu tinggi";
            alert(hasil);
            kesempatan -= 1;
        } else if (tebakan < comp) {
            hasil = "tebakan anda terlalu rendah";
            alert(hasil);
            kesempatan -= 1;
        } 

        if (kesempatan === 0) {
            alert('Kamu kalah, angka yang dicari adalah ' + comp);
        }
    } tanya = confirm("mau main lagi?");
}
alert("Terimakasih sudah bermain");