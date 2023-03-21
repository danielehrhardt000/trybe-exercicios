import { nanoid } from 'nanoid';
import './style.css';

const passwordBtn = document.querySelector('#btn-senha');
const displayPassword = document.querySelector('#senha');

passwordBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});
