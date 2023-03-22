console.log("Hi");

let changeMe = document.querySelector('.active');
let home = document.querySelector('#navHome')

// console.log(changeMe);

changeMe.addEventListener('click', () => {
    home.innerHTML = "emoH";
    home.style.backgroundColor = "pink";
    home.style.color = "blue"
})