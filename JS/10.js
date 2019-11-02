let date = prompt("Enter date in format DD.MM.YYYY");
console.log("date=" + date);
let day = +date.slice(0, 2);
console.log("day=" + day);
let month = +date.slice(3, 5);
console.log("month=" + month);
let year = +date.slice(6, 10);
console.log("year=" + year);

let nextDay = 0;
let nextMonth = month;
let nextYear = year;

function leapYear(y) {
    if ((!(y % 400)) || ((!(y % 4)) && (y % 100))) {
        return 1;
    } else {
        return 0;
    }
}

function lastDayOfMonth(m, y) {
    if (m == 2) {
        if (leapYear(y)) {
            return 29;
        } else {
            return 28;
        }
    } else if ((m == 4) || (m == 6) || (m == 9) || (m == 11)) {
        return 30;
    } else {
        return 31;
    }
}

console.log("leap=" + leapYear(year));
console.log("last=" + lastDayOfMonth(month, year));

if ((isNaN(year)) || (year % 1)) {
    console.log("Incorrectly entered year!");
} else if ((isNaN(month)) || (month % 1) || (month > 12)) {
    console.log("Incorrectly entered month!");
} else if ((isNaN(day)) || (day % 1) || (day > lastDayOfMonth(month, year))) {
    console.log("Incorrectly entered day!");
} else {
    if (day == lastDayOfMonth(month, year)) {
        nextDay = 1;
        if (month == 12) {
            nextMonth = 1;
            nextYear = year + 1;
        } else {
            nextMonth = month + 1;
        }
    } else {
        nextDay = day + 1;
    }
    if (nextDay < 10) nextDay = "0" + nextDay;
    if (nextMonth < 10) nextMonth = "0" + nextMonth;
    console.log("NextDate=" + nextDay + "." + nextMonth + "." + nextYear);
}