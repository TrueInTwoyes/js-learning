function camelize(str) {

    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

function checkCamelize() {

    let check = prompt('my-short-string -> ' + camelize('my-short-string') + '\ninput your words for camelCase with "-"');
    alert(check + " -> " + camelize(check));

}