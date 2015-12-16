
class GolField {

    constructor(rows: number, cols: number)  {
        // create the canvas and extract the context
        this.canvas = <HTMLCanvasElement> document.createElement("canvas");
        this.rows = rows;
        this.cols = cols;
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    render(): void {
        var ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
        ctx.fillStyle = "#0000ff";
        ctx.fillRect(10, 10, 10, 10);
    }
    
    private canvas: HTMLCanvasElement;
    private field: boolean[][];
    private rows: number;
    private cols: number;
}
