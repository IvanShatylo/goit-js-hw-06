const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('span');

inputRef.addEventListener('input', onInput);

function onInput(event) {
  textRef.style.fontSize = inputRef.value + "px";
}