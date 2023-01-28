// Exercícios dia 3

// Parte - 1 - fatorial
// let fatorial = num => {
//     if (num > 1) {
//         return num * fatorial(num - 1)
//     }
//     return num
// }

// console.log(fatorial(10));

// Parte - 2 - Inverter palavra
// let word = 'tryber'
// let reverseWord = ''

// for (let index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
// }
// console.log(reverseWord);

// Parte - 3 - Maior e menor palavra
let palavras = 'oi, meu, chapa, tudo, bem, com, você';
let maior = ''
let menor = ''

for (let index = 0; index < palavras.length; index+=1) {
    match(/\w+/g)
    maior += palavras[index]
}
console.log(maior);
