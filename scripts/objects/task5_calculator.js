
function calculate() {
    let calculator = {
        read() {
            this.firstNumber = +prompt('Input first number', 0);
            this.secondNumber = +prompt('Input second number', 0);
        },
        
        sum() {
            return this.firstNumber + this.secondNumber;
        },

        mul() {
            return this.firstNumber * this.secondNumber;
        }
    };

    calculator.read();
    alert("Sum: " +calculator.sum());
    alert("Multiply: " + calculator.mul());
}