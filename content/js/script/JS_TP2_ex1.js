let time = 10;

const intervalEx1 = setInterval(countdown, 1000);

function countdown() {
    if (time > 0) {
        time = time - 1;
        document.getElementById("compteur").textContent = "Compte à rebours: " + time;
    }
    else {
        clearInterval(intervalEx1);
    }
}