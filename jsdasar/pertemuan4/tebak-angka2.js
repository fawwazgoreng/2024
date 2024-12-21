let ulang = true;
while (ulang) {
  let chance = 3;
  let c = Math.floor(Math.random() * 10) + 1;
  let hasil = '';

  while (chance >= 1) {
    alert("Memulai permainan dengan " + chance + " kesempatan");
    let p = parseInt(prompt("Tebak angka 1-10"));
    if (p === c) {
      hasil = 'BENAR';
      alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + c);
      break;
    } else if (p < c) {
      hasil = 'RENDAH';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    } else if (p > c) {
      hasil = 'TINGGI';
      chance -= 1;
      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');
    } 

    if (chance === 0) {
      alert('Anda gagal \nangka yang dicari adalah ' + c);
    }
  }
  ulang = confirm('Ulang Lagi?');
}
alert("Terima kasih");