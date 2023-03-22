console.log("Hi");

let selected = document.getElementById('option-selected');
let changed = document.getElementById('my-select');

changed.addEventListener('change', (e) => {
    console.log(e);
    selected.innerHTML = "Sie haben ausgewählt " + e.target.value
})