var jmlTaxi = 10;
var taxiBeroperasi = 6;
var noTaxi = 1;

while (noTaxi <= taxiBeroperasi) {
    console.log('Taxi No. ' + noTaxi + ' beroperasi dengan baik');
    noTaxi++;
}

for (noTaxi = taxiBeroperasi + 1; noTaxi <= jmlTaxi; noTaxi++) {
    console.log('Taxi No. ' + noTaxi + ' sedang tidak beroperasi');
}

// ==================================================================
// | noTaxi | noTaxi <= jmlTaxi |              Output               |
// ==================================================================
// |   1    |       TRUE        |Taxi no. 1 beroperasi dengan baik  |
// |   2    |       TRUE        |Taxi no. 2 beroperasi dengan baik  |
// |   3    |       TRUE        |Taxi no. 3 beroperasi dengan baik  |
// |   4    |       TRUE        |Taxi no. 4 beroperasi dengan baik  |
// |   5    |       TRUE        |Taxi no. 5 beroperasi dengan baik  |
// |   6    |       TRUE        |Taxi no. 6 beroperasi dengan baik  |
// |   7    |       TRUE        |Taxi no. 7 sedang tidak beroperasi |
// |   8    |       TRUE        |Taxi no. 8 sedang tidak beroperasi |
// |   9    |       TRUE        |Taxi no. 9 sedang tidak beroperasi |
// |   10   |       TRUE        |Taxi no. 10 sedang tidak beroperasi|
// |   11   |       FALSE       |          KELUAR DARI LOOP!        |
// ==================================================================