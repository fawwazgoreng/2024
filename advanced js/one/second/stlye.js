// 2.1 EXECUTION CONTENT, HOISTING & SCOPE

//hoisting

// console.log(nama);  //execution phase  
// var nama = "Fawwaz"; //creation phase
// console.log(nama);  //execution phase

//window = global objek
//this = wndow


// var nama = 'fawwaz';
// var umur = 15 ;

// console.log(sayHello());

// function sayHello() {
//     return(`Hello nama saya ${nama}, umur saya ${umur}`);
// }

//function membuat local execution

var nama = 'muhammad fawwaz';
var ig = 'mikael hatori';

function cetakUid() {
    console.log(arguments[0]);
    var instagramUid ="google.com ";
    return instagramUid + ig;
}

console.log(cetakUid('@doddy'));

function a (){
    console.log('ini adalah function a')

    function b () {
        console.log('ini adalah function b')

        function c () {
            console.log('ini adalah function c')
        }

        c();
    }

    b();
}

a();

function satu() {
    var nama = "fawwaz";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama ="erick";
satu();
dua('doody');
console.log(nama);