#' @export
parseCells <- function(filename) {
  if (is.null(filename) || !nzchar(filename))
    return(list())

  # read the input file
  cellContents <- readLines(filename)

  # discard comments and explode
  cellContents <- cellContents[!grepl("^!", cellContents)]
  cellChars <- strsplit(cellContents, "")

  # compute the width of the field
  cols <- max(unlist(lapply(cellChars, length)))

  # convert to numeric representation
  lapply(cellChars, function(cells) {
    # O represents a live cell
    vec <- vapply(cells, function(cell) {
      if (cell == "O") 1 else 0
    }, 0)
    # fill the rest of the columns with dead cells
    if (length(vec) < cols)
      vec <- c(vec, rep.int(0, cols - length(vec)))

    # return completed vector
    names(vec) <- NULL
    vec
  })
}
