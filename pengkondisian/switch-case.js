// var angka = prompt('Masukkan angka :');

// switch (angka) {
//     case '1':
//         alert('Anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('Anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('Anda memasukkan angka 3');
//         break;
//     default:
//         alert('Angka yang anda masukkan salah!');
//         break;
// }

// var angka = parseInt(prompt('Masukkan angka :'));

// switch (angka) {
//     case 1:
//         alert('Anda memasukkan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukkan angka 2');
//         break;
//     case 3:
//         alert('Anda memasukkan angka 3');
//         break;
//     default:
//         alert('Angka yang anda masukkan salah!');
//         break;
// }

// var item = prompt('Masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink');

// switch (item) {
//     case 'nasi':
//         alert('Makanan / minuman SEHAT!');
//         break;
//     case 'daging':
//         alert('Makanan / minuman SEHAT!');
//         break;
//     case 'susu':
//         alert('Makanan / minuman SEHAT!');
//         break;
//     case 'hamburger':
//         alert('Makanan / minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink':
//         alert('Makanan / minuman TIDAK SEHAT!');
//         break;
//     default:
//         alert('Anda memasukkan nama makanan / minuman salah!');
//         break;
// }

var item = prompt('Masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukkan nama makanan / minuman salah!');
        break;
}