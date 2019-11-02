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