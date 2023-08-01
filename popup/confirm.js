// confirm('Anda Yakin?');

// var tes = confirm('Anda Yakin?');
// alert(tes); // true false

// var tes = confirm('Anda Yakin?');
// if (tes === true) {
//     alert('User menekan OK!');
// } else {
//     alert('User menekan CANCEL!')
// }

alert('Selamat datang...');
var lagi = true;

while (lagi) {
    var nama = prompt('Masukkan nama Anda:');
    alert('Hallo ' + nama);
    lagi = confirm('Coba Lagi?')
}
alert('Terima Kasih...');