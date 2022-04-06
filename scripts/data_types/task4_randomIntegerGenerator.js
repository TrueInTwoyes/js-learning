function randomInteger(min, max) {
    return Math.floor() * (max - min + 1) + min;
}

function randomizerInteger() {
    let min = Math.ceil(+prompt("Input start value"));
    let max = Math.floor(+prompt("Input end value"));
    alert("Your random number is " + Math.round(random(min,max)));
}