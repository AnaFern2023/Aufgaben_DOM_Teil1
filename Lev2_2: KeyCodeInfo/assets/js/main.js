const bigKeyCode = document.querySelector('#bigKeyCode');
const key = document.querySelector('#key');
const keyCode = document.querySelector('#keyCode');
const code = document.querySelector('#code')

document.addEventListener('keydown', (e) => {
    key.textContent = e.key;
    keyCode.textContent = e.keyCode;
    code.textContent = e.code;
    bigKeyCode.innerHTML = e.keyCode;
    console.log(e);
})
