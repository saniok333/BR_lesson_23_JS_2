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