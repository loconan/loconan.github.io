const canvas = document.getElementById("cvs");
const ctx = canvas.getContext('2d');


ctx.fillStyle = "yellow";
ctx.fillRect(0,0, canvas.width, canvas.height);

const timeUpdate = 100;

const interval = setInterval(mainLoop, timeUpdate);

let wallClock = 0;

class Carre {
    constructor(context, y, delay) {
        this.context = context;
        this.x = 0;
        this.y = y;
        this.delay = delay * 1000 / timeUpdate;
        this.width = 50;
        this.height = 50;
        this.hasStarted = false;
    }

    clear() {
        if (this.hasStarted == true) {
            this.context.clearRect(this.x - 10, this.y, this.width, this.height);
            this.context.fillStyle = "yellow";
            this.context.fillRect(this.x,this.y, this.width, this.height);
        }
        
    }

    update() {
        if ((this.hasStarted == false) && (this.delay<wallClock)) {
            this.hasStarted = true;
        }
    }

    draw() {
        if (this.hasStarted == true) {
            if(this.x < 550) {
                this.context.fillStyle = "red";
                this.context.fillRect(this.x, this.y, this.width, this.height);
                this.x = this.x + 10;
            }
            else {
                this.context.fillStyle = "red";
                this.context.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }
}

const squares = new Array();

const c1 = new Carre(ctx, 0, 0);
const c2 = new Carre(ctx, 100, 1);
const c3 = new Carre(ctx, 200, 4);

squares.push(c1);
squares.push(c2);
squares.push(c3);

function updateCanvas() {
    wallClock += 1;
    squares.forEach(element => element.update());
}

function clearCanvas() {
    squares.forEach(element => element.clear());
}

function drawCanvas() {
    squares.forEach(element => element.draw());
}

function mainLoop() {
    clearCanvas();
    updateCanvas();
    drawCanvas();
}
