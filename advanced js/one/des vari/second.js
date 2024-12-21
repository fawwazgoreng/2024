//Destructuring

// function kalkulasi(a,b) {
//     return [a+b,a-b,a / b, a*b]
// }

// const jumlah = plusKali(2,3);
// console.log(jumlah[0]);

// const[tambah = "tidak ada",kurang,bagi,kali] = kalkulasi(2,3);
// console.log(tambah);


//function kalkulasi
function kalkulasi(a,b) {
    return {
        tambah: a+b,
        kurang: a-b,
        bagi: a / b,
        kali: a*b
    }
}

const{bagi,kali,tambah,kurang} = kalkulasi(2,3);
console.log(kali);

//Destruction argument
const mhs1 = {
    nama: "Rizki",
    umur: 20,
    email: "rizki@gmail.com",
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 85
    }
}

function cetakMhs(nama,umur) {
    return `halo nama saya ${nama},saya berumur ${umur}`;
}

console.log(cetakMhs(mhs1.nama,mhs1.umur));

//cara benar

function cetakMhs2({nama,umur,email,nilai: {tugas,uts,uas} }) {
    return `halo nama saya ${nama},saya berumur ${umur} dan email saya ${email},dan nilai uts saya adalah ${uts}`;
}

console.log(cetakMhs2(mhs1));