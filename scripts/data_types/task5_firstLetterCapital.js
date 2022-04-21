function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);;
}

function setFirstCapitalLetter() {
    let str = prompt('Input your word');
    alert('You word with first capital letter is ' + ucFirst(str));
}