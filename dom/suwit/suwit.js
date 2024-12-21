function komputer() {
    const comp = Math.random();
    if (comp < 0.34)
        return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'semut';
    return 'orang';
};

function hasil(comp, player) {
    if (player == comp)
        return 'seri';
    if (player == 'orang') return (comp == 'semut') ? 'menang!' : 'kalah!';
    if (player == 'gajah') return (comp == 'orang') ? 'menang!' : 'kalah!';
    if (player == 'semut') return (comp == 'gajah') ? 'menang!' : 'kalah!';
    else {
        hasil = 'memasukkan pilihan yang salah!';
    }
};


function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktu = new Date().getTime();

    setInterval(function() {
        if ( new Date().getTime()- waktu > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', '' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {

    const pKomputer = komputer();
    const pPlayer = pil.className;
    const getHasil = hasil(pKomputer, pPlayer);

    putar();

    setTimeout(function() {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', '' +pKomputer+'.png');
    
        const inpo = document.querySelector('.info');
        inpo.innerHTML = getHasil;
    }, 1000)
    
    
    });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pKomputer = komputer();
//     const pPlayer = pGajah.className;
//     const getHasil = hasil(pKomputer, pPlayer);
    
//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', '' +pKomputer+'.png');

//     const inpo = document.querySelector('.info');
//     inpo.innerHTML = getHasil;
// });

