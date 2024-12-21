var jmlAngkot= 10;
var angkotBeroperasi= 6;
var angkotIlang= 9;
var angkotLembur=8;
for(var noAngkot=1; noAngkot <= jmlAngkot; noAngkot++) 

    if ( noAngkot == angkotLembur || noAngkot == 5 ){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else if( noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } 
    else if ( noAngkot <= angkotIlang) {
        console.log("Angkot No. " + noAngkot + " sedang dalam perbaikan")
    }
    else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }