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