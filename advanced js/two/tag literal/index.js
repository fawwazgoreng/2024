// tagged template

// const name = "John";
// const age = 30;

// function tes(coba,...value) {
//     // let str = "";
//     // coba.forEach((element, index) => {
//     //     str += element + (value[index] || "");
//     // })
//     // return str;

//     return coba.reduce((acc, cur,i) => `${acc}${cur}${value[i] || ""}`, "");
// }

// const pesan = tes`Halo nama saya ${name}, umur saya ${age} tahun`;

// console.log(pesan);

// // tagged template

const name = "John";
const age = 30;
const email = "john@gmail.com"

function highlight(coba,...value) {
    return coba.reduce((acc, cur,i) => `${acc}${cur}<span class="hl">${value[i] ||""}</span>frgrt`, "");
}

const pesan = highlight`Halo nama saya ${name}, umur saya ${age} tahun dan emial saya ${email}`;

console.log(pesan);

document.body.innerHTML = pesan;