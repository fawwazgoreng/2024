// const judul = document.getElementsByTagName("h1")[0];
// judul.innerHTML = "<i>selamat datang di web saya</i>";

// const sectionA = document.querySelector('section#a');
// const SEcA = sectionA.getElementsByTagName("p");
// SEcA[0].innerHTML = "ini adalah paragraf 1";

// const sectionB = document.querySelector('section#b');
// const SEcB = sectionB.getElementsByTagName("li");
// SEcB[1].style.backgroundColor = "red";
// SEcB[1].style.color = "blue";

// const judul2 = document.getElementsByName('h1')[0];
// const a = document.querySelector('section#a a');
// a.setAttribute('href', 'https://www.google.com');

// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('p2');
// p2.classList.toggle('p2');
// p2.classList.replace('label','dua');

// document.body.style.backgroundColor = "yellow";
// document.body.classList.toggle('biru-muda');



//dom manipulation 2
// CREATE NEW ELEMENT   
const pBaru = document.createElement('p');
const tPBaru = document.createTextNode('paragraf baru');
//SIMPAN TULISAN MENJADI 1
pBaru.appendChild(tPBaru);
//SIMPAN DI DALAM SECTION A
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);
//append child di akhir section
//SISIPKAN DI AKHIR SECTION A

//SISIPKAN DI TITIK TERTENTU
const liBaru = document.createElement('li');
const tLiBaru = document.createTextNode('list baru');
liBaru.appendChild(tLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);
liBaru.style.backgroundColor = "lightblue";

//REMOVE CHILD
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//REPLACE CHILD

const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const tH2 = document.createTextNode('judul baru');
h2.appendChild(tH2);
sectionB.replaceChild(h2, p4);
h2.style.backgroundColor = "lightgreen";