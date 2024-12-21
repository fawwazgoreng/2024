var item = prompt("masukkan nama barang :  \n (cth : nasi, daging, susu , dan pensil)");


switch (item) {
    case "nasi":
    case "daging":
        alert("makanan/minuman sehat");
        break;
    case "susu":
        alert("anda minum susu murni");
        break;
    default:
        alert("anda tidak memberi");
        break;
}