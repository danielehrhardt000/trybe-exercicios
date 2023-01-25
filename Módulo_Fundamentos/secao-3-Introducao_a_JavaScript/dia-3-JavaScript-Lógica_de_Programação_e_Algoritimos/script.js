// Exercícios dia 3

// Parte 1 - fatorial
// let fatorial = num => {
//     if (num > 1) {
//         return num * fatorial(num - 1)
//     }
//     return num
// }

// console.log(fatorial(10));

// Parte 2 - Inverter palavra
// let word = 'tryber'
// for (let index = 0; index < word.length; index+=1) {
//     word.push(word[index].split('').reverse().join(''));
// }
function reverse(s) {
    let word = 'tryber';
    for (let index = s.length - 1, join = 0; index >= 0; index -=1) {
        word += s[index];        
    }
    return word;
}
console.log(reverse(s));
