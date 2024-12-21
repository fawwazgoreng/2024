// cons 

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.tambahPenumpang = function (namaPenumpang) {
//indexOf = mencari nilai array
        if (penumpang.indexOf(namaPenumpang) > -1) {
            console.log(namaPenumpang + ' sudah ada di dalam angkot');
        } else {
//find index = mencari index array
            var kursiKosong = penumpang.findIndex(Object.is.bind(null, undefined));
            if (kursiKosong >= 0) {
                penumpang[kursiKosong] = namaPenumpang;
            } else {
                penumpang.push(namaPenumpang);
            }
        } return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            alert('Angkot masih kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            } else if (this.penumpang[i] != namaPenumpang) {
                alert('Penumpang tidak ada');
                return this.penumpang;
            }
        }

    }
}

var angkot1 = new Angkot('Joko', ['Cicaheum', 'Cibiru', 'Antapani'], [], prompt('Bayar penumpang pertama'),
    prompt('Bayar penumpang kedua'));

var angkot2 = new Angkot('Joko', ['Cicaheum', 'Cibiru', 'Antapani'], [], 0);