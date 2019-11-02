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