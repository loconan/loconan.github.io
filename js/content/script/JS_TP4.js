var worker = new Worker('./content/script/TP4_worker.js');

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');
const interval = setInterval(creerPoint, 100);
const maxRequest = 100;

let nbRequest = 0;

ctx.fillStyle = "red";

function creerPoint() {
    worker.postMessage([cvs.width, cvs.height]);
}

worker.onmessage = function(e) {
    if (nbRequest < maxRequest) {
        console.log(e.data);
        ctx.beginPath();
        ctx.arc(xGET,yGET, 10, 0, 360);
        ctx.stroke();
        nbRequest++;
    }
    else {
        clearInterval(interval);
    }
}