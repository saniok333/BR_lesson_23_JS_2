let year = +(prompt("Enter the year"));
if ((isNaN(year)) || (year % 1)) {
    console.log("Incorrectly entered data!");
} else {
    if ((!(year % 400)) || ((!(year % 4)) && (year % 100))) console.log("This year is a leap year!");
}