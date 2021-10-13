function getMarioFrame() {
  

  const spreadsheet = SpreadsheetApp.openById('15SClMwvDIqovtO3DJnf1GGIteH35UX3IM7-mnbdG6eE');
  const sheet = spreadsheet.getSheetByName('21. マルス');
  getCellIntersection("上B", "備考", sheet);
  
}

function getCellByName(name, sheet){
  for (let row = 1; row <= 140; row++){
    for (let colmun = 1; colmun <= 7; colmun++){
      const cell = sheet.getRange(row, colmun).getValue();
      if (String(cell).includes(name)) return [row, colmun];
      
    }
  }
}

function getCellIntersection(rowName, colmunName, sheet){
  row = getCellByName(rowName, sheet)[0];
  colmun = getCellByName(colmunName, sheet)[1];
  console.log(row, colmun)
  if (rowName.includes("B")) row++;
  console.log(row, colmun)
  console.log(sheet.getRange(row, colmun).getValue());
}

