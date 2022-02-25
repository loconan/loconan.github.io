onmessage = function(e) {
    var result = [Math.floor(Math.random() * e.data[0]), Math.floor(Math.random()* e.data[1])];
    this.postMessage(result);
}