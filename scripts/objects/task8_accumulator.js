function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
        alert(this.value += +prompt('Input number for accumulate:', 0));
    }

}

function accumulate() {
    
    let startingValue = +prompt('Input starting number:');
    let counter = +prompt('How many iterations for adding?');

    let accumulator = new Accumulator(startingValue);
    for (i = 0; i < counter; i++) {
        accumulator.read();
    }
}