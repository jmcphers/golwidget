#' @import htmlwidgets
#' @export
golwidget <- function(data, width = NULL, height = NULL) {

  # create the data to pass to the playing field
  x <- list(data = data)

  # create the widget
  htmlwidgets::createWidget("golwidget", x, width = width, height = height)
}

#' @export
golOutput <- function(outputId, width = "100%", height = "400px") {
  shinyWidgetOutput(outputId, "sigma", width, height, package = "golwidget")
}

#' @export
renderGol <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, golOutput, env, quoted = TRUE)
}
