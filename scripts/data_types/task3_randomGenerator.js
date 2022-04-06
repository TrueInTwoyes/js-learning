function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomizer() {
    let min = +prompt("Input start value");
    let max = +prompt("Input end value");
    alert("Your random number is " + random(min,max));
}