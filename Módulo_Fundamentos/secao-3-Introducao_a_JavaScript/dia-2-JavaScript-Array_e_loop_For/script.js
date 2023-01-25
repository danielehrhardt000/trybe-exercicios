let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Parte 1
// console.log(numbers.sort());

// Parte 2
// let sum = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     sum+=numbers[index]
// }
// console.log(sum);

// Parte 3
// let sum = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     sum+=numbers[index]/10
// }
// console.log(sum);

// Parte 4
// let sum = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     sum+=numbers[index]/10
// }
// if (sum => 20) {
//     console.log('É maior que 20');
// }else {
//     console.log('É menor que 20');
// }
// console.log(sum);

// Parte 5
// // for (let index = 0; index < numbers.length; index+=1) {
//     console.log(Math.max.apply(null, numbers));    
// }

// Parte 6
// let impar = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index]%2 !== 0)
//     {
//         impar++;
//     }
// }
// console.log('Os números ímpares são: ' + impar);

// Parte 7
// for (let index = 0; index < numbers.length; index+=1) {
//     console.log(Math.min.apply(null, numbers));    
// }

// Parte 8
// let array = []
// for (let index = 1; index <= 100; index+=1) {
//     array.push(index)
// }
// console.log(array);

// Parte 9
let array = []
let divi = []
for (let index = 1; index <= 100; index+=1) {
    array.push(index)
}
for (let indexdivi = 0; indexdivi < array.length; indexdivi+=1) {
    divi.push(array[indexdivi]/2)
}
console.log(divi);
