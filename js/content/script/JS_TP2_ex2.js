const canvas_ex2 = document.getElementById("cvs_ex2");
const ctx_ex2 = canvas_ex2.getContext('2d');

const intervalEx2 = setInterval(moveBox_ex2, 550);

let x_ex2 = 0;


function moveBox_ex2() {
    if (x_ex2  < 560 && x_ex2  == 0) {
        ctx_ex2.fillStyle = "yellow";
        ctx_ex2.fillRect(0,0, canvas_ex2.width, canvas_ex2.height);
        ctx_ex2.fillStyle = "red";
        ctx_ex2.fillRect(x_ex2 , 0, 50, 50);
        x_ex2  = x_ex2  + 10;
    }
    else if (x_ex2  < 560 && x_ex2  != 0) {
        ctx_ex2.clearRect(x_ex2 - 10, 0, 50, 50);
        ctx_ex2.fillStyle = "yellow";
        ctx_ex2.fillRect(0,0, canvas_ex2.width, canvas_ex2.height);
        ctx_ex2.fillStyle = "red";
        ctx_ex2.fillRect(x_ex2 , 0, 50, 50);
        x_ex2  = x_ex2  + 10;
    }
    else {
        clearInterval(intervalEx2);
    }
}