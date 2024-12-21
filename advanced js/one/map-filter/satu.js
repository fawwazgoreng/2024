const anka = [1,2,4,6,7,9,6];

// //mencari angka lebih dari 3
// const newA = [];
// for (let i = 0; i < anka.length;i++) {
//     if(anka[i] >= 3) {
//        newA.push(anka[i]);
//     }
// }

const newA = anka.filter( (a) =>a >= 3 );


//map
const aN = anka.map(a => a*2); //return dalam bentuk array baru


//reduce 
//kali semua 
const An = anka.reduce((accumulator,currentvalue) => accumulator*currentvalue, 1);

//method chaining
//cari angka lebih dari 2 
//lalu kali 
const hasil = anka.filter( (a) > 1)
.map(a => a*3).reduce((acc,curren) => acc + curren, 0)
