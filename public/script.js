function download() {
  var semester = document.getElementById('section').value;
  var week = document.getElementById('week').value;
  window.open(getLink(semester, week));
}

function getLink(semester, week) {
  return 'https://www.iutbayonne.univ-pau.fr/outils/edt/default/export?ID='
    + semester + '&week=' + week;
}