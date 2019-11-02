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