
class GolField {

    constructor(rows: number, cols: number)  {
        // create the canvas and extract the context
        this.canvas = <HTMLCanvasElement> document.createElement("canvas");
        this.ctx = <CanvasRenderingContext2D> this.canvas.getContext("2d");
        this.rows = rows;
        this.cols = cols;
    }

    getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    load(field: boolean[][]): void {
        this.rows = field.length;
        this.cols = field[0].length;
        this.generation = field;
        this.redraw();
    }

    step(): void {
        // cache width/height
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        var next: boolean[][] = [];

        // scan cells and compute next generation
        var neighbors = 0;
        for (var x = 0; x < this.rows; x++) {
            next.push([]);
            for (var y = 0; y < this.cols; y++) {
                // start with previous value 
                next[x].push(this.generation[x][y]);

                // count number of living neighbors
                neighbors = 0;
                for (var dx = -1; dx <= 1; dx++) {
                    // skip outside boundary
                    if (x + dx < 0 || x + dx >= this.rows)
                        continue;
                    for (var dy = -1; dy <= 1; dy++) {
                        // skip outside boundary
                        if (y + dy < 0 || y + dy > this.cols)
                            continue;

                        // skip own cell
                        if (dx == 0 && dy == 0) 
                            continue;

                        // count neighbor if alive
                        if (this.generation[x + dx][y + dy])
                            neighbors ++;
                    }
                }

                // apply ruleset
                if (neighbors > 3 || neighbors < 2)   // overpopulation
                    next[x][y] = false;
                if (neighbors == 3)                   // cell generation
                    next[x][y] = true;

                // redraw if needed (for performance we don't draw the cell if
                // it hasn't changed)
                if (next[x][y] != this.generation[x][y]) 
                    this.drawCell(x, y, next[x][y])
            }
        }

        // overwrite with newly computed state
        this.generation = next;
    }

    redraw(): void {
        // cache width/height
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.ctx.scale(1, 1);

        // draw all the cells
        for (var x = 0; x < this.rows; x++) {
            for (var y = 0; y < this.cols; y++) {
                this.drawCell(x, y, this.generation[x][y]);
            }
        }
    }

    private drawCell(x: number, y: number, alive: boolean) {
        this.ctx.fillStyle = alive ? "#2020FF" : "#EFEFEF";
        this.ctx.fillRect((this.width  / this.rows) * x,
                          (this.height / this.cols) * y,
                          (this.width  / this.rows),
                          (this.height / this.cols));
    }
    
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private generation: boolean[][];
    private rows: number;
    private cols: number;
    private width: number;
    private height: number;
}
