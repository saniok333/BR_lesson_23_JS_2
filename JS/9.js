let points = 0;
let answ1 = +prompt("Is the Earth biger then the Sun? \n 1 - Yes \n 2 - No \n 3 - They are the same size");
if (answ1 == 2) points++;
let answ2 = +prompt("How many ping-pong balls will fit in a Boeing 747? \n 1 - 20 \n 2 - 150 \n 3 - Dofiga");
if (answ2 == 3) points++;
let answ3 = +prompt("Что нужно делать когда увидишь зеленого человечка? \n 1 - Лететь с ним на Марс \n 2 - Принять Алко-Зельтцер \n 3 - Переходить дорогу");
if (answ3 == 3) points++;
console.log("Your points :" + points);