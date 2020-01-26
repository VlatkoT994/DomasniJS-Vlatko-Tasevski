// HW 1
function calculateDogAge(years, curFormat = 'human') {
  if ((curFormat = 'human')) return years * 7;
  return years / 7;
}
//HW 2
function reverse(str, rev = '') {
  let index = str.length - rev.length - 1;
  if (index !== 0) {
    rev += str[index];
    return reverse(str, rev);
  } else return rev + str[index];
}
function reverse2(str, c = 0) {
  if (str.length - c - 1 > 0) {
    return str[str.length - c - 1] + reverse2(str, c + 1);
  } else return str[str.length - c - 1];
}
//HW 3
function findWord(sentence, word) {
  let counter = 0;
  sentence = sentence.split(' ');
  sentence.forEach(value => {
    if (!value[value.length - 1].match(/[a-z]/i))
      value = value.substr(0, value.length - 1);
    if (value === word) counter++;
  });
  return counter;
}

//HW 4
function fillRows(tr, counter) {
  tr.appendChild(document.createElement('td'));
  if (counter > 1) fillRows(tr, counter - 1);
}
function createRows(table, counter, columns) {
  let tr = document.createElement('tr');
  fillRows(tr, columns);
  table.appendChild(tr);
  if (counter > 1) createRows(table, counter - 1, columns);
}
function createTable(rows, columns) {
  let table = document.createElement('table');
  table.cellSpacing = 0;
  createRows(table, rows, columns);
  document.body.appendChild(table);
}
createTable(10, 5);
