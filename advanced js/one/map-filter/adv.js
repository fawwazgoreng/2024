// ambil elemen vidio
//pilih hanya javascript lanjutan
// ambil duration
//ubah durasi menjadi integer dan menit = detik
//jumlah semua detik
// ubah format jadi jam menit detik

// simpan di dom
//array from mengubah menjadi array
let elemen = Array.from(document.querySelectorAll("[data-duration]"));
let js = elemen.filter( a => a.textContent.includes("JAVASCRIPT LANJUTAN"))
.map(item => item.dataset.duration)
.map(time => {
    //10:30 = [10,30]
    //parsefloat mengubah menjadi integer
    const part = time.split(":").map(art => parseFloat(art));
    return (part[0] * 60) + part[1];
})


.reduce((total, detik) => total + detik);

let jam = Math.floor(js / 3600);
js = js- jam *3600;
let menit = Math.floor(js / 60);
let detik = js - menit * 60;



const pDurasi = document.querySelector(".durasi");
pDurasi.textContent = `${jam} jam,${menit} menit, ${detik} detik`;
const pp = elemen.filter( a => a.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pVidios = document.querySelector(".jumlah-vidio");
pVidios.textContent = `jumlah vidio = ${pp}`;