/// <reference path="gol.ts"/>

// forward declare external type
declare var HTMLWidgets: any;

// local types
interface Instance {
    gol: GolField
}

interface RenderData {
    data: boolean[][]
}

// declare widget binding
HTMLWidgets.widget({

  name: "golwidget",

  type: "output",

  initialize: function(el: HTMLElement, width: number, 
                       height: number): Instance {
    var gol = new GolField(el, width, height);
    return {
      gol: gol
    };
  },
  
  renderValue: function(el: HTMLElement, x: RenderData, inst: Instance) {
      inst.gol.load(HTMLWidgets.transposeArray2D(x.data));
  },
  
  resize: function(el: HTMLElement, width: number, height: number, 
                   inst: Instance) {
      inst.gol.redraw();
  }
});
