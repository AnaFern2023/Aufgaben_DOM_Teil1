console.log("Hi");

let click = document.getElementById('clickMe');
console.log(click);

let anzahl = 0

click.addEventListener('click', () => {
    console.log("clicked");
    anzahl += 1;
    click.innerHTML = "Click me: " + anzahl
})