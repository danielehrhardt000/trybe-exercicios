let num = 0;
let mensagem = 'A soma total de 1 a 50 é: '

 for (let index = 1; index <= 50; index+=1) {
    num += index;
 }
 mensagem += num
 console.log(mensagem);