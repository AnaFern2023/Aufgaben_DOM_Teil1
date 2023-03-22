console.log("Hi");
// Verwende Befehle:
// addEventListener(“click”)
// event.preventDefault(); ===> ist wie onsubmit return false, nur im Javascript
// .value
// oder .selectedIndex 
// Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

const farbeAuswahlen = document.querySelector('#farbeAuswahlen');
const button = document.querySelector('#button');

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     const index = farbeAuswahlen.selectedIndex
//     console.log(index);

//     switch (index) {
//         case 0:
//             document.body.style.backgroundColor = "mediumorchid"
//             break;
//         case 1:
//             document.body.style.backgroundColor = "mintcream"
//             break;
//         case 2:
//             document.body.style.backgroundColor = "dodgerblue"
//             break;
//         case 3:
//             document.body.style.backgroundColor = "goldenrod"
//             break;
//         case 4:
//             document.body.style.backgroundColor = "wheat"
//             break;
//         case 5:
//             document.body.style.backgroundColor = "mediumturquise"
//             break;
//         case 6:
//             document.body.style.backgroundColor = "moccasin"
//             break;
//         case 7:
//             document.body.style.backgroundColor = "firebrick"
//             break;
//         case 8:
//             document.body.style.backgroundColor = "limegreen"
//             break;
//         case 9:
//             document.body.style.backgroundColor = "slategray"
//             break;
//     }
// })

button.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = farbeAuswahlen.value.replace(" ", "")
})