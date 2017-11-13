export const dateParse = (date) => {
  let values = date.split("-");
  let monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  return `${monthNames[values[1]-1]} ${values[2]}, ${values[0]}`;
};

export const addRow = (tableClass, rowClass, cellArray, evenOrOdd) => {
  let oldTable = document.getElementsByClassName(tableClass)[0];
  let newRow = oldTable.insertRow();
  newRow.classList.add(rowClass);
  if (evenOrOdd) newRow.classList.add("shaded");
  cellArray.forEach( (cell) => {
    let newCell = newRow.insertCell();
    newCell.innerHTML = cell;
  });
}
