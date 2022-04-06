function readNumber() {
    
    let value;

    while (true) {
        
        value = +prompt("Input number:", 0);
        
        if (typeof(value) === 'number' && !isNaN(value)) {
            alert(value);
            break;
        } else if (!value) {
            break;
        } 
    }
    
}