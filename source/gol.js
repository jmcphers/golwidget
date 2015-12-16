var GolField = (function () {
    function GolField(rows, cols) {
        // create the canvas and extract the context
        this.canvas = document.createElement("canvas");
        this.rows = rows;
        this.cols = cols;
    }
    GolField.prototype.getCanvas = function () {
        return this.canvas;
    };
    GolField.prototype.render = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#0000ff";
        ctx.fillRect(10, 10, 10, 10);
    };
    return GolField;
})();
