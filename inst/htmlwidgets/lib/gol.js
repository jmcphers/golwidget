var GolField = (function () {
    function GolField(el, width, height) {
        // create the canvas and append to the host element
        this.canvas = document.createElement("canvas");
        this.canvas.height = height;
        this.canvas.width = width;
        el.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }
    GolField.prototype.getCanvas = function () {
        return this.canvas;
    };
    GolField.prototype.load = function (field) {
        // extract number of rows/columns in the input field
        var rows = field.length;
        var cols = field[0].length;
        var cellWidth = this.canvas.offsetWidth / rows;
        var cellHeight = this.canvas.offsetHeight / cols;
        // start by assuming we'll have 10px cells (TODO: autoscale for larger
        // automata patterns)
        this.rows = Math.floor(this.canvas.offsetWidth / 10);
        this.cols = Math.floor(this.canvas.offsetHeight / 10);
        // compute the position of the input field in the larger field
        var dx = Math.floor((this.rows / 2) - (rows / 2));
        var dy = Math.floor((this.cols / 2) - (cols / 2));
        // fill the field with dead cells, except for the supplied field 
        this.generation = [];
        for (var x = 0; x < this.rows; x++) {
            this.generation.push([]);
            for (var y = 0; y < this.cols; y++) {
                if (x >= dx && x < dx + rows &&
                    y >= dy && y < dy + rows) {
                    this.generation[x].push(field[x - dx][y - dy]);
                }
                else {
                    this.generation[x].push(false);
                }
            }
        }
        this.redraw();
    };
    GolField.prototype.step = function () {
        // cache width/height
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        var next = [];
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
                            neighbors++;
                    }
                }
                // apply ruleset
                if (neighbors > 3 || neighbors < 2)
                    next[x][y] = false;
                if (neighbors == 3)
                    next[x][y] = true;
                // redraw if needed (for performance we don't draw the cell if
                // it hasn't changed)
                if (next[x][y] != this.generation[x][y])
                    this.drawCell(x, y, next[x][y]);
            }
        }
        // overwrite with newly computed state
        this.generation = next;
    };
    GolField.prototype.redraw = function () {
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
    };
    GolField.prototype.drawCell = function (x, y, alive) {
        this.ctx.fillStyle = alive ? "#2020FF" : "#EFEFEF";
        this.ctx.fillRect((this.width / this.rows) * x, (this.height / this.cols) * y, (this.width / this.rows), (this.height / this.cols));
    };
    return GolField;
})();
