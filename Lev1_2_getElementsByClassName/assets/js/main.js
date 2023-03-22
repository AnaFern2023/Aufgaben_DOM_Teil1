console.log("Hi");


const example = document.getElementsByClassName('example')
console.log(example);

let myFunction = () => {
    for (let index = 0; index < example.length; index++) {
        example[index].style.backgroundColor = "black";
        example[4].style.color = "white";
    }
}