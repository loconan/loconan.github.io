const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');
const interval = setInterval(creerPoint, 100);
const maxRequest = 100;

let finishedWorker = 0;

let tabWorker = {};

class WorkerPoint {
    constructor() {
        var worker = new Worker('./content/script/TP4_worker2.js');
        let nbRequest = 0;
        let r = (Math.floor(Math.random() * 255));
        let g = (Math.floor(Math.random() * 255));
        let b = (Math.floor(Math.random() * 255));
    }
}

for (var i = 0; i < 10; i++) {
    tabWorker[i] = new WorkerPoint();
}

function creerPoint() {
    for(var i = 0; i < 10; i++) {
        tabWorker[i].worker.postMessage([cvs.width, cvs.height, i]);
    }
}

worker.onmessage = function(e) {
    if (tabWorker[e.data[2]].nbRequest < maxRequest) {
        console.log(e.data);
        ctx.fillStyle = "rgb("+tabWorker[e.data[2]].r+","+tabWorker[e.data[2]].g+","+tabWorker[e.data[2]].b+")";
        ctx.beginPath();
        ctx.arc(e.data[0],e.data[1], 10, 0, 360);
        ctx.fill();
        ctx.stroke();
        tabWorker[e.data[2]].nbRequest++;
    }
    else {
        tabWorker[e.data[2]].worker.terminate();
        finishedWorker++;
        if(finishedWorker == 10) {
            clearInterval(interval);
        }
    }
}