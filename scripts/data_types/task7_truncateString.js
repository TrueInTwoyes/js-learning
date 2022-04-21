function truncate(str, maxlength) {

    if (str.length > maxlength) {
        return str.substring(0, maxlength) + '...'
    } else {
        return str
    }
    
}

function truncateString() {

    let str = prompt('Enter your text: ');
    let maxlength = prompt('Enter number of symbols for truncate text length: ');
    alert('Result: ' + truncate(str, maxlength));

}