const clickA = document.getElementById('href');
const preventA = () => {
    clickA.preventDefault()
    clickA.addEventListener('click');
}

const clickBox = document.getElementById('input-checkbox');
const preventBox = (event) => {
    event.preventDefault();
    clickBox.addEventListener('click');
}

const eventText = document.getElementById('input-text');
const keyText = (keypress) => {
    keypress.preventDefault(KeyboardEvent.key('Keya'))
}

window.onload = () => {
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
}