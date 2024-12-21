//     {setTimeout(() => {
//     resolve(`selesai`)
//     }, 2000);
// });

// console.log(coba);
// coba.then(() => {
//     console.log(`selesai`)   
// }
// )


function cobaProomise() {
    return new Promise((resolve, reject) => {
        const WAKTU = 6000;
        if ( WAKTU < 5000) {
    setTimeout(() => {
        resolve(`selesai`)
        }, WAKTU);
    } else {
        reject(`kelebihan waktu`)
    }
    });    
}

// const coba = cobaProomise();
// coba.then(() => {
//     console.log(coba)
// });
// coba.catch(() => {
//     console.log(coba)
// })




async function coaAsy () {
    try {
        const coba = await cobaProomise();
        console.log(coba);
    } catch (error) {
        console.error(error)
    }
}

coaAsy();


