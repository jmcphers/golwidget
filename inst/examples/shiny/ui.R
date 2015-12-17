library(shiny)
library(golwidget)

# read list of files on disk
cellFiles <- list.files(system.file("extdata", package="golwidget"))
names(cellFiles) <- lapply(cellFiles, tools::file_path_sans_ext)

# add "upload" option
cellFiles <- c(cellFiles, list("Upload your own..." = "upload"))

shinyUI(fluidPage(
  titlePanel("Game of Life"),
  sidebarLayout(
    sidebarPanel(
      selectInput('cellFile', 'Select Pattern', choices = cellFiles),
      conditionalPanel(
        condition = "input.cellFile === 'upload'",
        fileInput("cellFileUpload", "Upload Pattern File")
      )
    ),
    mainPanel(
       golOutput("gol")
    )
  )
))
