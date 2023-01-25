let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers.sort());

// let sum = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     sum+=numbers[index]
// }
// console.log(sum);

// let sum = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     sum+=numbers[index]/10
// }
// console.log(sum);

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

function largestNumbers(numbers){
    let largestNumber = [0];
    for (let index = 0; index < numbers.length; index+=1) {
        for (let larIndex = 0; larIndex < numbers[index].length; larIndex+=1) {
            if (numbers[index][larIndex] > largestNumber[index]) {
                largestNumber[index] = numbers[index][larIndex];
            }
    }
    
}
return largestNumber;
}
// console.log(largestNumber);
