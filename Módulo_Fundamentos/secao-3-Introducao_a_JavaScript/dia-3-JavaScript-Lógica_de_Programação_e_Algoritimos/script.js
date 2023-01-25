let fatorial = num => {
    if (num > 1) {
        return num * fatorial(num - 1)
    }
    return num
}

console.log(fatorial(10));