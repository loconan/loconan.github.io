const canvas_ex3 = document.getElementById("cvs_ex3");
const ctx_ex3 = canvas_ex3.getContext('2d');

const delayIntervalEx3 = setInterval(startIntervalEx3, 200);
let intervalEx3;


let delai = 10;
function startIntervalEx3() {
    if (delai > 0) {
        delai = delai - 1;
    } 
    else {
        clearInterval(delayIntervalEx3);
        intervalEx3 = setInterval(moveBox_ex3, 560);
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
