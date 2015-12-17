library(shiny)
library(htmlwidgets)
library(golwidget)

shinyServer(function(input, output) {
  dataInput <- reactive({
    cellFilePath <- if (input$cellFile == "upload")
                      input$cellFileUpload$datapath
                    else
                      system.file(file.path("extdata", input$cellFile),
                                  package = "golwidget")
    parseCells(cellFilePath)
  })
  output$gol <- renderGol({
    golwidget(dataInput())
  })
})
