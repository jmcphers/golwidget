function createField(width, height, rows, cols) {
    // create the canvas and extract the context
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(width / 4, height / 4, width * 0.75, height * 0.75);
    return canvas;
}
