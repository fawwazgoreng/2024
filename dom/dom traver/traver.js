//event handling
// const tombol = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// tombol.addEventListener("dblclick" , function () {
//     card.style.display = "none";
// })

//DOM TRAVERSAL
const tombol = document.querySelectorAll(".close");

// for (let i = 0; i < tombol.length; i++) {
//     tombol[i].addEventListener("dblclick" , function (event) {
//         event.target.parentElement.style.display = "none";
//     });
// };

// tombol.forEach(function (el) {
//     el.addEventListener("click" , function (event) {
//         event.target.parentElement.style.display = "none";
//         event.preventDefault();
//         event.stopPropagation();
//     });
// });

// const nama = document.querySelector(".nama");
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling);


// const card = document.querySelectorAll('.card');
// card.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert("ok");        
//     });
// });


const content = document.querySelector('.container');
content.addEventListener('click', function (e) {
    if ( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})