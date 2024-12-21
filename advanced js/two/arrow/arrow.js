const Nama = function (nama) {
    return `nama saya ${nama}`;
}
console.log(Nama("fawwaz"));

const nama = nama => `nama anda ${nama}`;
//implisit return
console.log(nama("fawwaz"));

const Siswa = (nama,umur) => {
    return `nama kita ${nama} dan umur kita ${umur}`;
}

console.log(Siswa("fawwaz",15))

const none = () => "Hello word";
console.log(none());

let siswa = ["muhammad fawwaz","reza pahlepi","aditia"];

let jumlah = siswa.map(nama => nama.length );
console.log(jumlah);

let jumlahH = siswa.map(nama => ({  nama, jumlahhuruf: nama.length  }));
console.log(jumlahH);