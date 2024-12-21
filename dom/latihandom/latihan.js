const cange = document.getElementById("color");
cange.addEventListener("click", function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

const cange2 = document.getElementById("warna");
cange2.addEventListener("dblclick", function () {
    document.body.classList.toggle("warna");
})

const cange3 = document.createElement("button");
const note = document.createTextNode("Klik Saya");
cange3.appendChild(note);
cange3.setAttribute("type", "button");
cange.after(cange3);

const sMerah = document.getElementsByTagName("input")[0];
const sHijau = document.getElementsByTagName("input")[1];
const sBiru = document.getElementsByTagName("input")[2];

sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});


document.body.addEventListener('mousemove', function(event) {
    //posisi mouse
    // event.clientX;
    // event.clientY;
    //ukuran browser
    // window.innerWidth;
    const xPos = Math.floor((event.clientX / window.innerWidth) * 255);
    const yPos = Math.floor((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
})