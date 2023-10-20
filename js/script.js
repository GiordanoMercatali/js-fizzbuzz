let gridString = "";

const rowElem = document.querySelector(".row");

for (let i = 1; i <= 100; i++){
    let result = "";
    if (i % 2 === 0){
        result = "even";
        // console.log(i, "even");
    } else {
        // console.log(i, "odd");
        result = "odd";
    }

    gridString += `<div class = "square ${result}">${i}</div>`
}

rowElem.innerHTML = gridString;
// console.log(gridString);