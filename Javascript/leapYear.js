let year = 2016;

isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
if (isLeapYear) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
