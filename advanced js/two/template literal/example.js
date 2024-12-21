// const fawwaz = {
//     nama: 'fawwaz',
//     umur: 15,
//     absen: 14,
//     email: `fawwazgmail.com`
// };

// const el = `<div class="siswa">
//         <h2>${siswa.nama}</h2>
//         <span class="absen">${siswa.absen}</span>
//     </div>`;
//     console.log(el);


//looping 
const ytta = [
    {
        nama: 'fawwaz',
        umur: 15,
        absen: 14,
        email: `fawwazgmail.com`
    },
    {
        nama: 'waz',
        umur: 15,
        absen: 14,
        email: `wazgmail.com`
    },
    {
        nama: 'ytta',
        umur: 15,
        absen: 14,
        email: `yttagmail.com`
    }
]

const el = `<div class="siswa">
        ${ytta.map(m => `<ul>
        <li>${m.nama}</li>    
        <li>${m.umur}</li>    
        <li>${m.absen}</li>    
        <li>${m.email}</li>    
            </ul>`).join("")}
    </div>`;

// document.body.innerHTML = el;


//conditioner
//ternary

// const p = document.querySelector("h1");

// const lagu = {
//     judul: `rewrite the star`,
//     cast: `arthur`,
//     feat: `forget`,
// }

// const elip = `<div class="siswa">
// <ul>
//        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat}) ` : ``}</li>
//         <li>${lagu.cast}</li></ul> 
//     </div>`;


// console.log(p);
// p.innerHTML = elip;

//nested 
//html fragment bersarang

const rpl = {
    nama: "fawwaz",
    kelas: `10 rpl 2`,
    pelajaran: [`mtk`,`seni budaya`,`pplg`,`si`,`pabp`],
}

function cetakPelajaran(pelajaran) {
    return `
        <ol>
          ${pelajaran.map(p => `<li>${p}</li>`).join("")}
        </ol>
    `
}

const li = `<div class">
<h2>nama: ${rpl.nama}</h2>
<span class="kelas"> kelas ${rpl.kelas}</span>
<h4>pelajaran</h4>
${cetakPelajaran(rpl.pelajaran)}
</div>`

document.body.innerHTML = li;