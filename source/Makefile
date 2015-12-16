all: gol.js golwidget.js

gol.js: gol.ts
	tsc gol.ts
	cp gol.js ../inst/htmlwidgets/lib

golwidget.js: golwidget.ts
	tsc golwidget.ts
	cp golwidget.js ../inst/htmlwidgets

