var penumpang = ["rois","repal","rebut"];

function tambahPenumpang(nama, penumpang) {
    if (penumpang.indexOf(nama) > -1) {
        console.log(nama + ' sudah ada di dalam angkot');
    } else {
        var kursiKosong = penumpang.findIndex(Object.is.bind(null, undefined));
        if (kursiKosong >= 0) {
            penumpang[kursiKosong] = nama;
        } else {
            penumpang.push(nama);
        }
    }
    return penumpang;
}


function hapusPenumpang(nama, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else if (penumpang.indexOf(nama) == -1) {
        console.log(nama + ' tidak ada di dalam angkot');
        return penumpang;
    } else {
        penumpang[penumpang.indexOf(nama)] = undefined;
        return penumpang;
    }
}

