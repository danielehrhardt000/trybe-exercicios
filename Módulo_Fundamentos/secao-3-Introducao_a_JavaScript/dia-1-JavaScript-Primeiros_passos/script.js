// If/Else

// let a = 20
// let b = 35

// let adicao = a + b;
// console.log(adicao);

// let sub = a - b;
// console.log(sub);

// let multi = a*b;
// console.log(multi);

// let divi = a/b;
// console.log(divi);

// let mol = a%b;
// console.log(mol);

// let a = 45
// let b = 45
// let c = 90

// if (a > b){
//     console.log('a é maior');
// }else {
//     console.log('b é maior');
// }

// if (a > b && a > c){
//     console.log('a é maior');
// } else if (b > a && b > c) {
//     console.log('b é maior');
// } else if (c > a && c > a) {
//     console.log('c é maior');
// }

// if (a > 0) {
//     console.log('positive');
// } else if (a < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// if (a === 45 && b === 45 && c === 90) {
//     console.log(true);
// } else if (a < 45 || b < 45 || c < 90) {
//     console.log(false);
// } else if (a <= 0 || b <= 0 || c <= 0) {
//     console.log('valor inválido');
// }

// Switch/Case

let peça = 'rei';

switch (peça) {
    case 'bispo':
        console.log('qualquer casa na diagonal');
        break;
    case 'torre':
        console.log('qualquer casa na vertical ou horizontal');
        break;
    case 'rei':
        console.log('uma casa na vertical, horizontal ou diagonal');
        break;
    case 'rainha':
        console.log('qualquer casa na vertical, horizontal ou diagonal');
        break;
    case 'cavalo':
        console.log('anda em L');
        break;
    default:
        console.log('Peça inválida');
        break;
}