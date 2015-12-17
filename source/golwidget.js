/// <reference path="gol.ts"/>
// declare widget binding
HTMLWidgets.widget({
    name: "golwidget",
    type: "output",
    initialize: function (el, width, height) {
        var gol = new GolField(el, width, height);
        return {
            gol: gol
        };
    },
    renderValue: function (el, x, inst) {
        inst.gol.load(HTMLWidgets.transposeArray2D(x.data));
    },
    resize: function (el, width, height, inst) {
        inst.gol.redraw();
    }
});
