function main() {
  const spreadsheet = SpreadsheetApp.openById('15SClMwvDIqovtO3DJnf1GGIteH35UX3IM7-mnbdG6eE');
  const sheet = spreadsheet.getSheetByName('1. マリオ');
  console.log(sheet.getRange("弱攻撃", "判定持続").getValue());
}
