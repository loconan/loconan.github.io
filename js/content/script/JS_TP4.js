var worker = new Worker('./content/script/TP4_worker.js');

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');
const interval = setInterval(creerPoint, 100);
const maxRequest = 100;

let nbRequest = 0;

let r = (Math.floor(Math.random() * 255));
let g = (Math.floor(Math.random() * 255));
let b = (Math.floor(Math.random() * 255));

ctx.fillStyle = "rgb("+r+","+g+","+b+")";

function creerPoint() {
    worker.postMessage([cvs.width, cvs.height]);
}

worker.onmessage = function(e) {
    if (nbRequest < maxRequest) {
        ctx.beginPath();
        ctx.arc(e.data[0],e.data[1], 10, 0, 360);
        ctx.fill();
        ctx.stroke();
        nbRequest++;
    }
    else {
        clearInterval(interval);
        worker.terminate();
    }
}