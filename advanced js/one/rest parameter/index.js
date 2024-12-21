//Rest parameter

function sum() {
    // return a;
    return Array.from(arguments);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function jumlah(...anka) {
    let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }

    // for (let a of arguments) {
    //     total += a;
    // }

    return anka .reduce((total, num) => total + num);
    // return total;
}

console.log(jumlah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//array destructuring

const siswa = ["adit", "charly", "nazil",'fawwaz'];
const [ketua, wakil, ...anggota] = siswa;

console.log(anggota);

// const ketua = siswa[0];

//objeck destructuring

const team = {
    pm: 'fawwaz',
    fe: 'cahrly',
    be: 'adit',
    dt: 'nazil',
    ux: 'abi'
}

const {pm, fe, be, ...anggota2} = team;

console.log(pm);

//filtering

function filter (type,...value) {
    return value.filter(v => typeof v === type);
}

console.log(filter('number',1,2,3,'sandhika',false,true))