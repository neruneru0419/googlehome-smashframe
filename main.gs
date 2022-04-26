//スプレッドシートリンク→https://docs.google.com/spreadsheets/d/15SClMwvDIqovtO3DJnf1GGIteH35UX3IM7-mnbdG6eE/edit#gid=849055518
function main(fighterName, technique) {
  //const fighterName = getFighterName()
  const spreadsheet = SpreadsheetApp.openById('15SClMwvDIqovtO3DJnf1GGIteH35UX3IM7-mnbdG6eE');
  const sheet = spreadsheet.getSheetByName('1. マリオ'); // fightername
  getCellIntersection("空前", "判定持続", sheet);
}

function getCellByName(name, sheet){
  for (let row = 1; row <= 140; row++){
    for (let colmun = 1; colmun <= 9; colmun++){
      if (sheet.getRange(row, colmun).getValue() == name) {
        console.log(row, colmun);
        return [row, colmun];
      }
    }
  }
}

function getCellIntersection(rowName, colmunName, sheet){
  row = getCellByName(rowName, sheet)[0];
  colmun = getCellByName(colmunName, sheet)[1];
  console.log(sheet.getRange(row, colmun).getValue());
}
