

function createField(width: number, height: number, 
                     rows: number, cols: number): HTMLCanvasElement  {

    // create the canvas and extract the context
    var canvas = <HTMLCanvasElement> document.createElement("canvas");
    var ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

    ctx.fillStyle = "#0000ff";
    ctx.fillRect(width / 4, height / 4, width * 0.75, height * 0.75);

    return canvas;
}
