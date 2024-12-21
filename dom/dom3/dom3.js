// daftar event 
// .mouse
// >Event click
// event keyboard
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');

function changeColor() {
    p3.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'red';
}

p2.onclick = changeColor;

const p4 = document.querySelector('section#b p');
const p5 = document.querySelector('.p5');
p4.addEventListener('dblclick', function () {
    p4.classList.toggle('biru-muda')
    const ul = document.querySelector('section#b ul');

    const li = document.createElement('li');
    const isiLi = document.createTextNode('ini adalah item baru');
    li.appendChild(isiLi);
    ul.appendChild(li);
});


