//spread operator

const ytta = ["sandika",'fawwaz','erick'];
const ytta2 = ["surya",'dewi','dewa'];
const gabung = [...ytta,'aju',...ytta2];
const orang = ytta.concat(ytta2);

console.log(gabung)
console.log(orang)

//menggabung array
//copy array


//copy array

const siswa = ["adit",'charly','nazil'];
const siswa2 = [...siswa];
console.log(siswa2);


const liS = document.querySelectorAll('li');
// const MHS = [];
// for (let i= 0; i < liS.length; i++){
//     MHS.push(liS[i].textContent);
// }

// console.log(MHS);
const MHS = [...liS].map(m => m.textContent);
console.log(MHS);




const nama = document.querySelector('.first');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;