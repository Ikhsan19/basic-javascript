// let s = '';
// let pola = 5;
// for (let i = 0; i < pola; i++) {
//     s += '*';
// }
// console.log(s);

// *****

// let s = '';
// let pola = 5;
// for (let i = 0; i < pola; i++) {
//     s += '*';
//     s += '\n';
// }
// console.log(s);

// *
// *
// *
// *
// *


// let s = '';
// let pola = 5;
// for (let i = 0; i < pola; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// *****

// let s = '';
// let pola = 5;
// for (let i = pola; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// *****
// ****
// ***
// **
// *

// let s = '';
// let pola = 5;
// for (let i = 0; i < pola; i++) {
//     for (let j = pola; j >= i; j--) {
//         s += ' ';
//     }
//     for (let k = 0; k <= i; k++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//     *
//    **
//   ***
//  ****
// *****

// let s = '';
// let pola = 5;
// for (let i = 0; i < pola; i++) {
//     for (let j = pola; j >= i; j--) {
//         s += ' ';
//     }
//     for (let k = 0; k <= 2 * i; k++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//     *
//    ***
//   *****
//  *******
// *********

// let s = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         s += ' ';
//     }
//     for (let k = 0; k <= 2 * i; k++) {
//         s += '*';
//     }
//     s += '\n';
// }
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += ' ';
//     }
//     for (let k = 5; k >= 2 * i - 5; k--) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

let s = '';
let pjg = 10;
let lbr = 6;
for (let i = 0; i < lbr; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < pjg; j++) {
            if (j % 2 == 0) {
                s += '#';
            } else {
                s += ' ';
            }
        }
    } else {
        for (let j = 0; j < pjg; j++) {
            if (j % 2 == 0) {
                s += ' ';
            } else {
                s += '#';
            }
        }
    }

    s += '\n';
}
console.log(s);

// # # # # # 
//  # # # # #
// # # # # # 
//  # # # # #
// # # # # # 
//  # # # # #