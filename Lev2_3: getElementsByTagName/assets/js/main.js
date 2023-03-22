console.log("Hi");

// Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333

const aTag = document.getElementsByTagName('a')
console.log(aTag);
const changeMe = document.querySelector('.active')


changeMe.addEventListener('click', () => {
    for (let index = 0; index < aTag.length; index++) {
        aTag[0].style.backgroundColor = "#f6c89f";
        aTag[1].style.backgroundColor = "#ffe7d1";
        aTag[2].style.backgroundColor = "#4b8e8d";
        aTag[3].style.backgroundColor = "#396362";
        aTag[0].style.color = "#666";
        aTag[1].style.color = "#666";
        aTag[2].style.color = "#333";
        aTag[3].style.color = "#333";
    };
})