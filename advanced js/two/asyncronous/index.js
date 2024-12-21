// //callback
// // function printHello(nama) {
// //     console.log("Hello"+nama+"!");
// // }

// function print(callback) {
//     const nama = prompt("Siapa nama anda?");
//     callback(nama);
// }

// print((nama) => {
//   alert `halo ${nama}`;   
// }
// );


// const siswa = [
//     {
//         nama: "fawwaz",
//         absen: "15",
//         email: "fawwazqe",
//         jurusan: "rpl",
//         Dosen: 1,
//     },
//     {
//         nama: "reza",
//         absen: "4",
//         email: "redjah",
//         jurusan: "rpl",
//         Dosen: 2,
//     },
//     {
//         nama: "charly",
//         absen: "7",
//         email: "supriupri",
//         jurusan: "rpl",
//         Dosen: 3,
//     }
// ]


// console.log("start");
// siswa.forEach(s => {
//     for(let i = 0; i < 10000;i++) {
//         let date = new Date();
//     }
//     console.log(s.nama)});
// console.log("end");

//asyncronus call back

// function getData(url, secces,failed) {
//     let xh = new XMLHttpRequest();

//     xh.onreadystatechange = function(){
//         if( xh.readyState === 4) {
//             if(xh.status === 200) {
//                 secces(xh.response);
//             } else if (xh.status === 404) {
//                 failed();
//             }
//         }
//     }

//     xh.open('get',url);
//     xh.send();
// }

// console.log(`mulai`);

// getData(`jaso/first.json`, result => {
//     const siswa = JSON.parse(result);
//     siswa.forEach( s => console.log(s.nama));
// }, () => {

// });

// console.log(`end`);

console.log(`mulai`);
 
$.ajax({
    url: `jaso/first.json`,
    success: (siswa) => {
        siswa.forEach(s => console.log(s.nama))
    },
    error: (e) => {
        console.log(e.responseText);
    }
    
})
console.log(`end`);