const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');

const delayIntervalSquare = setInterval(delaySquares, 100);


let delai2ndSquare = 10;
let delai3rdSquare = 40;

let interval1stSquare;
let interval2nsSquare;
let interval3rdSquare;

function delaySquares() {
    delai2ndSquare = delai2ndSquare - 1;
    delai3rdSquare = delai3rdSquare - 1;
    if
    else {
        clearInterval(delayIntervalEx3);
        const intervalEx3 = setInterval(moveBox_ex3, 560);
    }
}

let x_ex3 = 0;

ctx_ex3.fillStyle = "yellow";
ctx_ex3.fillRect(0,0, canvas_ex3.width, canvas_ex3.height);
ctx_ex3.fillStyle = "red";
ctx_ex3.fillRect(x_ex3, 0, 50, 50);

function moveBox_ex3() {
    if (x_ex3 < 560 && x_ex3 == 0) {
        ctx_ex3.fillStyle = "yellow";
        ctx_ex3.fillRect(0,0, canvas_ex3.width, canvas_ex3.height);
        ctx_ex3.fillStyle = "red";
        ctx_ex3.fillRect(x_ex3, 0, 50, 50);
        x_ex3 = x_ex3 + 10;
    }
    else if (x_ex3 < 560 && x_ex3 != 0) {
        ctx_ex3.clearRect(x_ex3 - 10, 0, 50, 50);
        ctx_ex3.fillStyle = "yellow";
        ctx_ex3.fillRect(0,0, canvas_ex3.width, canvas_ex3.height);
        ctx_ex3.fillStyle = "red";
        ctx_ex3.fillRect(x_ex3, 0, 50, 50);
        x_ex3 = x_ex3 + 10;
    }
    else {
        clearInterval(intervalEx3);
    }
}
