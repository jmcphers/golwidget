/// <reference path="gol.ts"/>
HTMLWidgets.widget({
    name: "golwidget",
    type: "output",
    initialize: function (el, width, height) {
        var gol = new GolField(el, width, height);
        return {
            gol: gol
        };
    },
    renderValue: function (el, x, instance) {
    },
    resize: function (el, width, height, instance) {
    }
});
