var jmlTaxi = 10;
var taxiBeroperasi = 6;
for (noTaxi = 1; noTaxi <= jmlTaxi; noTaxi++) {
    if (noTaxi <= taxiBeroperasi && noTaxi !== 5) {
        console.log('Taxi No. ' + noTaxi + ' beroperasi dengan baik');
    } else if (noTaxi === 8 || noTaxi === 10 || noTaxi === 5) {
        console.log('Taxi No. ' + noTaxi + ' sedang lembur');
    } else {
        console.log('Taxi No. ' + noTaxi + ' sedang tidak beroperasi')
    }
}

// ==================================================================
// | noTaxi | noTaxi <= jmlTaxi |              Output               |
// ==================================================================
// |   1    |       TRUE        |Taxi no. 1 beroperasi dengan baik  |
// |   2    |       TRUE        |Taxi no. 2 beroperasi dengan baik  |
// |   3    |       TRUE        |Taxi no. 3 beroperasi dengan baik  |
// |   4    |       TRUE        |Taxi no. 4 beroperasi dengan baik  |
// |   5    |       TRUE        |Taxi no. 5 sedang lembur           |
// |   6    |       TRUE        |Taxi no. 6 beroperasi dengan baik  |
// |   7    |       TRUE        |Taxi no. 7 sedang tidak beroperasi |
// |   8    |       TRUE        |Taxi no. 8 sedang lembur           |
// |   9    |       TRUE        |Taxi no. 9 sedang tidak beroperasi |
// |   10   |       TRUE        |Taxi no. 10 sedang lembur          |
// |   11   |       FALSE       |          KELUAR DARI LOOP!        |
// ==================================================================