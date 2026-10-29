// EVERFINER newsletter → Google Sheet
// Paste this whole file into your Google Sheet's Apps Script editor
// (Extensions → Apps Script). Steps are in README.md under "Newsletter".

function doPost(e) {
  var p = e.parameter || {};

  // Bots fill in the hidden "website" box; people never see it
  if (p.website) return ContentService.createTextOutput('ok');

  var email = String(p.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return ContentService.createTextOutput('invalid');
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(['Signed up', 'Email']);

  // Skip people who are already on the list
  var existing = sheet.getRange(1, 2, sheet.getLastRow(), 1).getValues().flat();
  if (existing.indexOf(email) === -1) sheet.appendRow([new Date(), email]);

  return ContentService.createTextOutput('ok');
}
