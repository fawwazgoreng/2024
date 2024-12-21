// // objeck litelar
// let siswa = {
//     nama : "Fawwaz",
//     energi : 100,
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan`);
//     }
// }

// // function declaration

// const methodsiwa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan`);
//     },

//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`);
//     },

//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`hallo ${this.nama}, selamat tidur`);
//     }
// };

function Siswa(nama, energi) {
    // let siswa = Object.create(methodsiwa);
    // let this = Object.create(Siswa.prototype)
    this.nama = nama;
    this.energi = energi;
}

Siswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return "halo " + this.nama + " selamat makan";
}


Siswa.prototype.main = function (jam) {
    this.energi += jam % 2;
    return "halo " + this.nama + " selamat main";
}

Siswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return "halo " + this.nama + " selamat tidur";
}

let Fawwaz = new Siswa(`Fawwaz`, 100);
let ytta = new Siswa(`Ytta`, 100);

//class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        t8his.energi = energi;
    }
}

makan = function (porsi) {
    this.energi += porsi;
    return "halo " + this.nama + " selamat makan";
}

main = function (jam) {
    this.energi += jam % 2;
    return "halo " + this.nama + " selamat main";
}

tidur = function (jam) {
    this.energi += jam * 2;
    return "halo " + this.nama + " selamat tidur";
}

let charly = new Mahasiswa("charly",1);
let reza = new Mahasiswa ("reza",20)
// // constructor function

// function iswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`);
//     }
// }

// let Fawwa = new iswa (`Fawwaz`,100);
// let ytt = new iswa (`Ytta`,100);

