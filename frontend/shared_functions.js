export const dateParse = (date) => {
  let values = date.split("-");
  let monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  return `${monthNames[values[1]-1]} ${values[2]}, ${values[0]}`;
};
