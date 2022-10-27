var stringDate = "February 26, 2023";
const currentDate = new Date(+new Date());

const month = [
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
  "December"
][currentDate.getMonth()];

const reMonth = /^\D+/;
const reAfterComma = /\D+/;
const reBeforeComma = /^([^,])+/;
const reOnlyDigit = /\d/g;
var getOnlyDigit = stringDate.match(reBeforeComma);
const reOnlyAfterComma = /\,(.*)/;

var getOnlyDigitString = getOnlyDigit[0].toString();

var getonlyDayString = getOnlyDigitString.match(reOnlyDigit).join("");
var monthMatch = stringDate.match(reMonth);
var trimmedmonth = monthMatch.toString().trim();
var trimmedYear = stringDate.match(reOnlyAfterComma)[1].toString().trim();

var currentMonthNumber = "0";
switch (trimmedmonth) {
  case "January":
    currentMonthNumber = "1";
    break;
  case "February":
    currentMonthNumber = "2";
    break;
  case "March":
    currentMonthNumber = "3";
    break;
  case "April":
    currentMonthNumber = "4";
    break;
  case "May":
    currentMonthNumber = "5";
    break;
  case "June":
    currentMonthNumber = "6";
    break;
  case "July":
    currentMonthNumber = "7";
    break;
  case "August":
    currentMonthNumber = "8";
    break;
  case "September":
    currentMonthNumber = "9";
    break;
  case "October":
    currentMonthNumber = "10";
    break;
  case "November":
    currentMonthNumber = "11";
    break;
  case "December":
    currentMonthNumber = "12";
    break;
  default:
    currentMonthNumber = "25";
}

const customDate = new Date(
  trimmedYear,
  currentMonthNumber - 1,
  getonlyDayString
);
console.log(customDate);
console.log(currentDate);

if (customDate.setHours(0, 0, 0, 0) <= currentDate.setHours(0, 0, 0, 0)) {
  console.log("date is in past");
} else {
  console.log("date is in future");
}


