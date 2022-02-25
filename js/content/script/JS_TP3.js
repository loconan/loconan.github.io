const maxInt = 300;
const maxRequest = 100;
let numRequestGET = 0;
let numRequestFETCH = 0;

const canvas1 = document.getElementById("cvs1");
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById("cvs2");
const ctx2 = canvas2.getContext('2d');


let xGET = 0;
let yGET = 0;

let xFETCH = 0;
let yFETCH = 0;

let interval = setInterval(sendRequests, 1000);

function reqListener() {
    xGET = JSON.parse(this.responseText).x;
    yGET = JSON.parse(this.responseText).y;
    
    ctx1.beginPath();
    ctx1.arc(xGET,yGET, 10, 0, 360);
    ctx1.stroke();
    
}

let oRequest = new XMLHttpRequest();
oRequest.addEventListener("load", reqListener);

function sendRequests() {
    if ((numRequestGET == maxRequest) && (numRequestFETCH == maxRequest)) {
        clearInterval(interval);
    }
    else {
        if(numRequestFETCH < maxRequest) {
            sendFETCHRequest();
        }
        if(numRequestGET < maxRequest) {
            sendGETRequest();
        }
    }
}

function sendGETRequest() {
    oRequest.open("GET", "https://stwom.herokuapp.com/"+maxInt);
    oRequest.send();
    numRequestGET = numRequestGET + 1;
}

function sendFETCHRequest() {
    fetch("https://stwom.herokuapp.com/"+maxInt)
        .then(response => {
            return(response.json());
        }).then(c => {
            xFETCH = c.x;
            yFETCH = c.y;

            ctx2.beginPath();
            ctx2.arc(xFETCH,yFETCH, 10, 0, 360);
            ctx2.stroke();
        });
    
    numRequestFETCH = numRequestFETCH + 1;
}