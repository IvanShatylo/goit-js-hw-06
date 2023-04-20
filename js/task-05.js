const inputRef = document.querySelector('#name-input');
const textGreetingRef = document.querySelector('#name-output');

inputRef.addEventListener("input", (event) => {
  textGreetingRef.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value;
});