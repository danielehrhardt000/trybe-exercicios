// Parte 1 - Mensagem
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos'
// };

// console.log(`Bem-vinda, ${info.personagem}.`);

// Parte 2 - Nova propriedae
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos',
//     recorrente: 'Sim'
// };

// console.log(info);

// Parte 3 - Chaves do objeto
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos',
//     recorrente: 'Sim'
// };

// for (let propriedade in info) {
// console.log(propriedade);
// }

// Parte 4 - Valores do objeto
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos',
//     recorrente: 'Sim'
// };

// for (let value in info){
//     console.log(info[value]);
// }

// Parte 5 - Novo objeto
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos',
//     recorrente: 'Sim'
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell´s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// };

// // console.log(`${info.personagem} e ${info2.personagem}
// // ${info.origem} e ${info2.origem}
// // ${info.nota} do ${info.origem} e ${info2.nota}
// // ambos recorrentes.`);

// for (let propriedade in info) {
//     if (propriedade === 'recorrente' &&
//     info[propriedade] === 'Sim' &&
//     info2[propriedade] === 'Sim') {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(`${info[propriedade]} e ${info2[propriedade]}`);
//     }
// }

// Parte 6 - Acessando o objeto
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Passos',
//     idade: 21,
//     livrosFavoritos: [
//         {
//         titulo: 'O pior dia de todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//         },
//     ],
// };
// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

// leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter eo Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco'
//     },
// );
// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} de livros favoritos.`);
