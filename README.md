# Game of Life htmlwidget for R

This is a simple [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) implementation as an R [HTML widget](http://www.htmlwidgets.org/), suitable for use in Shiny applications, R Markdown documents, and at the R console.

It accepts as input a matrix containing the initial state of the board, and draws the board along with some simple simulation controls.

For example, here's the famous glider:

    golwidget(list(c(0, 1, 0), 
                   c(0, 0, 1),
                   c(1, 1, 1)))

## Demo

The package includes a Shiny application that demonstrates its use. You can run it using this command after the package is installed:

    shiny::runApp(system.file("examples/shiny", package="golwidget"))

## Using Life pattern files

The function `parseCells` accepts as input a file in the [plain-text Life file format](http://conwaylife.com/wiki/Plaintext), and returns a matrix suitable for rendering in the widget. For example:

    # glidergun.cells
    
    !Name: Gosper glider gun 
    ! 
    ........................O........... 
    ......................O.O........... 
    ............OO......OO............OO 
    ...........O...O....OO............OO 
    OO........O.....O...OO.............. 
    OO........O...O.OO....O.O........... 
    ..........O.....O.......O........... 
    ...........O...O.................... 
    ............OO......................

    # myfile.R 
    
    golWidget(parseCells("glidergun.cells"))

You can find hundreds of Life patterns in the `.cells` format on the [Life Wiki](http://www.conwaylife.com/wiki/Main_Page).

