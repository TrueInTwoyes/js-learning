function Calculator() {

    this.read = function() {
        this.numberFirst = +prompt("Input first number:");
        this.numberSecond = +prompt("Input second number:");
    }
    
    this.sum = function() {
        return (this.numberFirst + this.numberSecond);
    }

    this.mul = function() {
        return (this.numberFirst * this.numberSecond);
    }

}

function calculateConstructor() {
    
    let calculator = new Calculator();
    calculator.read();

    alert( "Sum is " + calculator.sum() );
    alert( "Multiply is " + calculator.mul() );
}