// membuat objek
// litelar
var fawwaz1 = {
    nama: 'Muhammad fawwaz almumtaz',
    kelas: 'X RPL 2',
    alamat: 'jinggotan',
    umur: 15,
    hobi: ['membaca buku', 'olahraga', 'menggambar'],
    sekolah: {
        nama: 'SMK N 1 Bogor',
        alamat: 'kelet keling',
        jurusan: ["rpl", "tkj"],
    }
};

// funtion declar

function buatObjekSiswa(nama, kelas, alamat, umur, hobi, sekolah) {
    var ssw = {};
    ssw.nama = nama;
    ssw.kelas = kelas;
    ssw.alamat = alamat;
    ssw.umur = umur;
    ssw.hobi = hobi;
    ssw.sekolah = sekolah;
    return ssw;
}

var fawwaz2 = buatObjekSiswa(
    'Muhammad fawwaz almumtaz', 'X RPL 2', 'jinggotan', 15, ['membaca buku', 'olahraga', 'menggambar'], {
    nama: 'SMK N 1 Bogor',
    alamat: 'kelet keling',
    jurusan: ["rpl", "tkj"],
});

// constructor
function Siswa(nama, kelas, alamat, umur, hobi, sekolah) {
    this.nama = nama;
    this.kelas = kelas;
    this.alamat = alamat;
    this.umur = umur;
    this.hobi = hobi;
    this.sekolah = sekolah;
}
//jangan lupa new 
var fawwaz3 = new Siswa(
    'sambu','xppkt1','cibinong', 15, ['membaca buku', 'olahraga', 'menggambar'], {
    nama: 'SMK N 1 Bogor',
    alamat: 'kelet keling',
    jurusan: ["rpl", "tkj"],
    }
)