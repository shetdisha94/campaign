export const formatDate = (date) => {
  const dateObj = new Date(date);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dateObj.getDate();
  const month = monthNames[dateObj.getUTCMonth()];
  const year = dateObj.getFullYear();

  //function to get the ordinal suffix of the day
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const formattedDate = `${month} ${day}${getOrdinalSuffix(day)} ${year}`;
  console.log(dateObj);
  console.log(day, month, year);
  console.log(formattedDate);
  return formattedDate;
};
