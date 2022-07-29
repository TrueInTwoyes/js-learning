function camelize(str) {
    
    let arr = str.split('-');
    arr.forEach(word => {
        word[0].toUpperCase();
        camelStr = arr.join();
    });

    return camelStr;
}

function checkCamelize() {

    alert(camelize('my-short-string'));

}