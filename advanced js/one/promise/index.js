// // // console.log(`mulai`);
 
// // // $.ajax({
// // //     url: `jaso/first.json`,
// // //     success: (siswa) => {
// // //         siswa.forEach(s => console.log(s.nama))
// // //     },
// // //     error: (e) => {
// // //         console.log(e.responseText);
// // //     }
    
// // // })
// // // console.log(`end`);

// // //fethhh

// //  fetch('xxx.json')
// //  .then(response => response.json())
// //  .then(data => console.log(data))

// //promisee
// //objeck yang mereprentasikan succes / gagal sebuah proses asynchronous
// //aksi (then / catch)



// const promisee = new Promise((resolve,rejeck) => {
//     let janji = false;
//     if (janji) {
//         resolve(`sukses`)
//     } else {
//         rejeck(`gagal`)
//     }
// })

// promisee.then(response => console.log(`ok : ${response}`))
//         .catch(response => console.log(`gagal : ${response}`))


// janji2 = new Promise((resolve,rejeck) => {
//     let janji = false;
//     if (janji) {
//         setTimeout(() => {
//             resolve(`sukses`)
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             rejeck(`gagal`)
//         },2000)
//     }
// })

// // console.log(`mulai`)
// // console.log(janji2.then(() => {console.log(janji2)}))
// // console.log(`end`)

// .finally(() => console.log(`selesai`))
// janji2.then(janji2 => console.log(`ok : ${janji2}`))
//         .catch(janji2 => console.log(`gagal : ${janji2}`))

//Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: `avenger`,
            tahun: 2019,
            genre: `action`
        }])
    }, 3000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: `jakarta`,
            suhu: 30
        }])
    }, 2000);
})

// film.then(film => console.log(film))
// cuaca.then(cuaca => console.log(cuaca))
Promise.all([film, cuaca])
    // .then(res => console.log(res))
    .then(res => {
        const [film, cuaca] = res;
        console.log(film)
        console.log(cuaca)
    })
