library(shiny)
library(htmlwidgets)
library(golwidget)
source("utils.R")

shinyServer(function(input, output) {
  output$gol <- renderGol({
    golwidget(parseCells(input$cellFile$datapath))
  })
})
