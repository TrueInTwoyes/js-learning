function inputNumber(){
    let number

    do {
        number = prompt("Input number more than 100", "0");
    }
    while (number <= 100 && number);
}