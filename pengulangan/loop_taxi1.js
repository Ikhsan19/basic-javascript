// TABEL PENELUSURAN

// var nilaiAwal = 1;
// while (nilaiAwal <= 10) {
//     console.log('Taxi no. ' + nilaiAwal + ' beroperasi dengan baik');
//     nilaiAwal++;
// }

// jika jumlah taxi bertambah suatu waktu
var jmlTaxi = 10
var noTaxi = 1;
while (noTaxi <= jmlTaxi) {
    console.log('Taxi no. ' + noTaxi + ' beroperasi dengan baik');
    noTaxi++;
}

// =================================================================
// | noTaxi | noTaxi <= jmlTaxi |              Output              |
// =================================================================
// |   1    |       TRUE        |Taxi no. 1 beroperasi dengan baik |
// |   2    |       TRUE        |Taxi no. 2 beroperasi dengan baik |
// |   3    |       TRUE        |Taxi no. 3 beroperasi dengan baik |
// |  ...   |       ...         |                ...               |
// |   10   |       TRUE        |Taxi no. 10 beroperasi dengan baik|
// |   11   |       FALSE       |         KELUAR DARI LOOP!        |
// =================================================================