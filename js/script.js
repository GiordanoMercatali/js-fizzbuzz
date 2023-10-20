let gridString = "";

const rowElem = document.querySelector(".row");

for (let i = 1; i <= 100; i++){
    let result = "";
    if (i % 3 == 0 && i % 5 == 0){
        result = "fizzbuzz";
        gridString += `<div class = "square ${result}">${result}</div>`
    } else if (i % 3 == 0 && !(i % 5 == 0)) {
        result = "fizz";
        gridString += `<div class = "square ${result}">${result}</div>`
    } else if (!(i % 3 == 0) && i % 5 == 0) {
        result = "buzz";
        gridString += `<div class = "square ${result}">${result}</div>`
    } else {
        result = i;
        gridString += `<div class = "square">${i}</div>`
    }

    console.log(result);

    // gridString += `<div class = "square ${result}">${i}</div>`
}

rowElem.innerHTML = gridString;
// console.log(gridString);