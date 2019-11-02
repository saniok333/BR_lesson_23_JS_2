////////////////////////////////////////////////////////// 1
let age = parseInt(prompt("Введите возраст"));
if (isNaN(age)) {
  console.log("Неправильно введен возраст!");
} else {
  if (age >= 0 && age < 12) {
    console.log("Ребенок");
  } else if (age < 18) {
    console.log("Подросток");
  } else if (age < 60) {
    console.log("Взрослый");
  } else {
    console.log("Пенсионер");
  }
}

///////////////////////////////////////////////////////////////////// 2
let numb = parseInt(prompt("Enter a number from 0 to 9"));
switch (numb) {
  case 1:
    console.log("!");
    break;
  case 2:
    console.log("@");
    break;
  case 3:
    console.log("#");
    break;
  case 4:
    console.log("$");
    break;
  case 5:
    console.log("%");
    break;
  case 6:
    console.log("^");
    break;
  case 7:
    console.log("&");
    break;
  case 8:
    console.log("*");
    break;
  case 9:
    console.log("(");
    break;
  case 0:
    console.log(")");
    break;
  default:
    console.log("Incorrectly entered data!");
    break;
}

////////////////////////////////////////////////////////////////////// 3
let numb = +(prompt("Enter an integer with two or more digits"));
console.log("numb=" + numb);
if ((isNaN(numb)) || (numb % 1) || (numb < 10)) {
  console.log("Incorrectly entered data!");
} else {
  let checkSame = 0;
  while (true) {
    if (checkSame == 1) {
      console.log(checkSame);
      console.log("Your number contains the same digits!");
      break;
    } else {
      if (numb < 10) break;
      let a = numb % 10;
      console.log("a=" + a);
      numb = (numb - a) / 10;
      let numb2 = numb;
      while (true) {
        let b = numb2 % 10;
        console.log("b=" + b);
        if (a == b) {
          checkSame = 1;
          break;
        } else if (numb2 >= 10) {
          numb2 = (numb2 - b) / 10;
        } else {
          break;
        }
      }
    }
  }
  if (checkSame == 0) console.log("Your number doesn't contain the same digits!");
}


/////////////////////////////////////////////////////////////////////////////////////// 4
let year = +(prompt("Enter the year"));
if ((isNaN(year)) || (year % 1)) {
  console.log("Incorrectly entered data!");
} else {
  if ((!(year % 400)) || ((!(year % 4)) && (year % 100))) console.log("This year is a leap year!");
}

/////////////////////////////////////////////////////////////////////////////////// 5

let numb = +(prompt("Enter an integer with two or more digits"));
if ((isNaN(numb)) || (numb % 1)) {
  console.log("Incorrectly entered data!");
} else {
  console.log("numb=" + numb);
  let numb2 = 0;
  for (let i = 10;
    ((numb / (i / 10)) >= 1); i = i * 10) {
    numb2 = numb2 * 10 + ((numb - (numb % (i / 10))) % i) / (i / 10);
    console.log("numb2=" + numb2);
  }
  if (numb == numb2) console.log("Your number is a palindrome!");
}

//////////////////////////////////////////////////////////////////////////////////// 6

let dollarAmount = +prompt("Enter the amount in United States dollars.");
let currencyType = prompt("Enter the currency You want to convert Your dollars (EUR, UAN or GBP).");
if (isNaN(dollarAmount)) {
  console.log("Incorrectly entered data!");
} else {
  switch (currencyType) {
    case "EUR":
      console.log("Your amount in EUR is " + (0.896634 * dollarAmount).toFixed(2));
      break;
    case "UAN":
      console.log("Your amount in UAN is " + (7.038724 * dollarAmount).toFixed(2));
      break;
    case "GBP":
      console.log("Your amount in GBP is " + (0.772178 * dollarAmount).toFixed(2));
      break;
    default:
      console.log("Incorrectly entered data!");
      break;
  }
}


///////////////////////////////////////////////////////////////// 7
let purchaseAmount = +prompt("Enter the purchase amount.");
if (isNaN(purchaseAmount)) {
  console.log("Incorrectly entered data!");
} else if (purchaseAmount >= 500) {
  console.log("Your payment amount is " + (0.93 * purchaseAmount).toFixed(2));
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  console.log("Your payment amount is " + (0.95 * purchaseAmount).toFixed(2));
} else if (purchaseAmount >= 200 && purchaseAmount < 300) {
  console.log("Your payment amount is " + (0.97 * purchaseAmount).toFixed(2));
} else {
  console.log("Your payment amount is the same as purchase amount.");
}


//////////////////////////////////////////////////////////////////////////////////// 8
let lengthCircle = +prompt("Enter the length of circle.");
if ((isNaN(lengthCircle)) || (lengthCircle < 0)) {
  console.log("Incorrectly entered data!");
} else {
  let squarePerimeter = +prompt("Enter the square perimeter.");
  if ((isNaN(squarePerimeter)) || (squarePerimeter < 0)) {
    console.log("Incorrectly entered data!");
  } else if ((lengthCircle / Math.PI) < (squarePerimeter / 4))
    console.log("The cirle fits inside the square!")
  else
    console.log("The cirle doesen't fit inside the square!")
}

////////////////////////////////////////////////////////////////////////////////////////// 9
let points = 0;
let answ1 = +prompt("Is the Earth biger then the Sun? \n 1 - Yes \n 2 - No \n 3 - They are the same size");
if (answ1 == 2) points++;
let answ2 = +prompt("How many ping-pong balls will fit in a Boeing 747? \n 1 - 20 \n 2 - 150 \n 3 - Dofiga");
if (answ2 == 3) points++;
let answ3 = +prompt("Что нужно делать когда увидишь зеленого человечка? \n 1 - Лететь с ним на Марс \n 2 - Принять Алко-Зельтцер \n 3 - Переходить дорогу");
if (answ3 == 3) points++;
console.log("Your points :" + points);

///////////////////////////////////////////////////////////////////////////////////////////////////// 10
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