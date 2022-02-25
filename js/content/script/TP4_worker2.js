onmessage = function(e) {
    var result = [Math.floor(Math.random() * e.data[0]), Math.floor(Math.random()* e.data[1]), e.data[2]];
    this.postMessage(result);
}