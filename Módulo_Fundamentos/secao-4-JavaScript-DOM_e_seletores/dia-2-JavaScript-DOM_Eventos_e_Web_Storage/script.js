// Buscando elementos
document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'rgb(74, 178, 195)';

document.getElementById('primeiroFilhoDoFilho').innerText = 'Estou usando o JavaScript para editar esse HTML.';

// document.getElementById('pai').firstElementChild;

// document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// document.getElementById('elementoOndeVoceEsta').nextSibling;

// document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;

// Criando elementos
let elemento = document.getElementById('pai');
let elementoIrmao = document.createElement('section');
elementoIrmao.id = 'irmaoElementoOndeVoceEsta';
elemento.appendChild(elementoIrmao);

let elemento2 = document.getElementById('elementoOndeVoceEsta');
let elementoFilho = document.createElement('section');
elementoFilho.id = 'novoFilho.';
elemento2.appendChild(elementoFilho);

let elemento3 = document.getElementById('primeiroFilhoDoFilho');
let elementoFilhoDoFilho = document.createElement('section');
elementoFilhoDoFilho.id = 'novoFilhoDoFilho.';
elemento3.appendChild(elementoFilhoDoFilho);

document.getElementById('novoFilhoDoFilho').parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);