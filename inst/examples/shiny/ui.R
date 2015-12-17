library(shiny)
library(golwidget)

shinyUI(fluidPage(

  titlePanel("Game of Life"),
  sidebarLayout(
    sidebarPanel(
      fileInput('cellFile', 'Choose Pattern File')
    ),
    mainPanel(
       golOutput("gol")
    )
  )
))
