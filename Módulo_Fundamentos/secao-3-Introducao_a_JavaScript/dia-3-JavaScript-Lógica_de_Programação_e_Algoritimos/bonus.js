// Parte 1 - Quadrado de asteríscos
// let n = 55;
// let symbol = '*';
// let inputline = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex+=1) {
//     inputline = inputline + symbol;
// }
// for (let lineIndex = 0; lineIndex < n; lineIndex+=1) {
//     console.log(inputline);
// }

// Parte 2 - Triângulo retângulo de asteríscos
// let n = 5;
// let symbol = '*';
// let inputline = '';

// for (let lineIndex = 0; lineIndex <= n; lineIndex+=1) {
//     console.log(inputline);
//     inputline = inputline + symbol;
// }

// Parte 3 - Triângulo invertdo
// let n = 5;
// let symbol = '*';
// let inputline = '';
// let inputposition = n - 1;

// for (let lineIndex = 0; lineIndex < n; lineIndex+=1) {
//     for (let columnIndex = 0; columnIndex < n; columnIndex+=1) {
//         if (columnIndex < inputposition) {
//             inputline = inputline + ' ';
//         } else {
//             inputline = inputline + symbol;
//         }
//     }
//     console.log(inputline);
//     inputline = '';
//     inputposition -= 1;
// };

// Parte 4 - Pirâmidde
// let n = 5;
// let symbol = '*';
// let inputline = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex+=1) {
//    for (let columnIndex = 0; columnIndex <= n; columnIndex+=1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//         inputline = inputline + symbol;
//     } else {
//         inputline = inputline + ' ';
//     }
//    } 
//    console.log(inputline);
//    inputline = '';
//    controlRight += 1;
//    controlLeft -= 1;
// }

// Parte 5 - Pirâmide vazia
// let n = 7;
// let middle = (n +1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';

// for (let line = 1; line < n; line+=1) {
//     let outputLine = '';
//     for (let col = 1; col <= n; col+=1) {
//         if (col == controlLeft || col == controlRight || line == middle) {
//             outputLine += symbol;
//         } else {
//             outputLine += ' ';
//         }
//     }
//     controlLeft -=1;
//     controlRight +=1;
//     console.log(outputLine);
// }

// Parte 6 - Descobrindo o primo
// let divisors = 1;
// let numberToChek = 31;

// for (let number = 2; number <= numberToChek; number+=1) {
//     if (numberToChek % number === 0) divisors +=1
// }
// if (divisors === 2) console.log(`${numberToChek} é primo`);
// else console.log(`${numberToChek} não é primo`);