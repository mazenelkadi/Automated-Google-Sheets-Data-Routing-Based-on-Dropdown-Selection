function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var selectedCell = sheet.getActiveCell();
  var columnWithDropdown = 6;  // Change this to the column number that contains the drop-down menu

  if ((sheet.getSheetName() == "Pipeline") && (selectedCell.getColumn() == columnWithDropdown)) {
    var selectedOption = selectedCell.getValue();
    var destinationSheet = '';

    // Add an if statement to check the selected option and assign the destination sheet accordingly
    if (selectedOption == 'Ongoing') {
      destinationSheet = e.source.getSheetByName("Ongoing");
    }
    else if (selectedOption == 'Pending Review') {
      destinationSheet = e.source.getSheetByName("Pending Review");  // Replace "Pending Review" with the name of your destination sheet
    }
    else if (selectedOption == 'Closed') {
      destinationSheet = e.source.getSheetByName("Closed");  // Replace "Closed" with the name of your destination sheet
    }
    // Add more else if statements for additional options as needed

    if (destinationSheet != '') {
      var rowNum = selectedCell.getRow();
      var sourceRange = sheet.getRange(rowNum, 1, 1, sheet.getLastColumn());
      var lastRow = destinationSheet.getLastRow();
      var targetRange = destinationSheet.getRange(lastRow + 1, 1);
      sourceRange.copyTo(targetRange);
      sheet.deleteRow(rowNum);
    }
  }
}
