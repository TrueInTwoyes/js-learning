function checkSignNumber() {
    let number = prompt('Input number', '');

    if (number == 0) {
        alert(0);
    } else if (number > 0) {
        alert('1');
    } else {
        alert('-1');
    }
}