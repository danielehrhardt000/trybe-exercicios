import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtn = document.querySelector('#btn-senha');
const displayPassword = document.querySelector('#senha');

passwordBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});

displayPassword.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
