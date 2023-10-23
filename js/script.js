let gridString = "";

const rowElem = document.querySelector(".row");

const fizz = "Fizz";
const buzz = "Buzz";

for (let i = 1; i <= 100; i++){
    let result = "";
    let className = "";
    if (i % 3 == 0 && i % 5 == 0){
        // result = "FizzBuzz";
        result = fizz+buzz;
        className = "fizzbuzz";
        // gridString += `<div class = "square ${result}">${result}</div>`
    } else if (i % 3 == 0 && !(i % 5 == 0)) {
        // result = "Fizz";
        result = fizz;
        className = "fizz";
        // gridString += `<div class = "square ${result}">${result}</div>`
    } else if (!(i % 3 == 0) && i % 5 == 0) {
        // result = "Buzz";
        result = buzz;
        className = "buzz";
        // gridString += `<div class = "square ${result}">${result}</div>`
    } else {
        result = i;
        // gridString += `<div class = "square">${i}</div>`
    }

    gridString += `<div class = "square ${className}">${result}</div>`

    console.log(result);

    // gridString += `<div class = "square ${result}">${i}</div>`
}

rowElem.innerHTML = gridString;
// console.log(gridString);