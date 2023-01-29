// Exercícios dia 3

// Parte - 1 - fatorial
// let fatorial = num => {
//     if (num > 1) {
//         return num * fatorial(num - 1)
//     }
//     return num
// }
// console.log(fatorial(10));
// // ou
// let fatorials = 1;

// for (let index = 10; index > 0; index-=1) {
//     fatorials *= index;
// }
// console.log(fatorials);

// console.log(fatorial(10));

// Parte - 2 - Inverter palavra
// let word = 'tryber'
// let reverseWord = ''

// for (let index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
// }
// console.log(reverseWord);

// Parte - 3 - Maior e menor palavra
// let palavras = ['oi, meu, chapa, tudo, bem, com, você'];
// let maior = palavras[0];
// let menor = palavras[0];

// for (let index = 0; index < palavras.length; index+=1) {
//     if (palavras[index].length > maior.length) {
//         maior = palavras[index];
//     }
// }

// for (let index = 0; index < palavras.length; index+=1) {
//     if (palavras[index].length < menor.length) {
//         menor = palavras[index];
//     }
// }
// console.log(maior);
// console.log(menor);

// Parte - 4 - Maior número primo
// let numeroPrimo = 0;

// for (let indexNumero = 2; indexNumero <= 50; indexNumero += 1) {
//     let ePrimo = true;
//     for (let indexDivisor = 2; indexDivisor < indexNumero; indexDivisor += 1) {
//         if (indexNumero % indexDivisor === 0) {
//             ePrimo = false;
//         }
//     }
//     if (ePrimo) {
//         numeroPrimo = indexNumero;
//     }
// }
// console.log(numeroPrimo);