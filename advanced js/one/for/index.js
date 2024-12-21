//for of dan for in

//for of
const siswa = ["saya", "muhammad", "fawwaz", "ytta", "reza"];

for (let i = 1; i < siswa.length; i++) {
    console.log(siswa[i]);
}

siswa.forEach((e,i) => {console.log(e,i);})

for (const i of siswa) {console.log(i);}

//string

const nama = "muhammad fawwaz";
for (const i of nama) {console.log(i);}

// nama.forEach((n) => {console.log(n);}) tidak bisa

for(const [i,m] of siswa.entries()) {
    console.log(i,m);
}




//Nodelist
const list = document.querySelectorAll(".nama");

list.forEach((e) => {console.log(e.textContent);})

for (const i of list) {console.log(i.textContent)};

//argument
function jumlah() {
    // return arguments.reduce((a,i) => a + i);
     let jumlah = 0;
    // [arguments].forEach((e) => {jumlah += e;});
    for ( a of arguments) {
        jumlah += a;
    }
    return jumlah
}

console.log(jumlah(1,2,3,4,5,6,7,8,9,10));

//for in

const obj = {
    nama: "muhammad fawwaz",
    usia: 21,
    kelas: "12 rpl 1",
    alamat: "jalan jalan"
}

for( o in obj) {
    console.log(obj[o]);    
}