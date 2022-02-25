let worker = new Worker('./content/script/TP4_worker.js');

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');
const interval = setInterval(creerPoint, 100);

ctx.fillStyle = "red";

function creerPoint() {
    worker.postMessage([cvs.width, cvs.height]);
}

worker.onmessage = function(e) {
    console.log(e.data);
}