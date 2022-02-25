let finishedWorker = 0;
let tabWorker = {};

class WorkerPoint {
    constructor() {
        this.worker = new Worker('./content/script/TP4_worker2.js');
        this.nbRequest = 0;
        this.r = (Math.floor(Math.random() * 255));
        this.g = (Math.floor(Math.random() * 255));
        this.b = (Math.floor(Math.random() * 255));
    }
}

for (var i = 0; i < 10; i++) {
    tabWorker[i] = new WorkerPoint();
}

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');
const interval = setInterval(creerPoint, 100);
const maxRequest = 100;

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