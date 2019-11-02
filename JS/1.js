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