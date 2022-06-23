function sumInput() {
    
    let arrayForSum = [];
    let sum = 0;

    while (true) {
        
        let value = prompt('Enter number for sum \nOr enter not number value for stop');
        if (value === null || typeof(value) === '' || !isFinite(value)) {
            break;
        }
        arrayForSum.push(+value);

    }

    for (let number of arrayForSum) {

        sum += number;

    }

    return sum;

}

function sumInArray() {

    alert('Sum is ' + sumInput());
    
}