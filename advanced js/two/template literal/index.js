// template literal
const nama = "muhammad fawwaz";
const umur = 14;
console.log (` halo nama saya ${nama}, umur saya ${umur}`);

//embeded expression
console.log(`${alert(`halo`)}`);

const x = 10;
console.log(`${(x % 2 == 0) ? "genap" : "ganjil"}`);

//html fragment

const siswa = {
    nama: "fawwaz",
    umur: 15,
    absen: 14,
};

const el = `<div class="siswa">
        <h2>${siswa.nama}</h2>
        <span class="absen">${siswa.absen}</span>
    </div>`;
    console.log(el);