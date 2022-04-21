function extractCurrencyValue(str) {

    return +str.substr(1, str.length);
    
}

function extractCurrencyValueFromString() {

    let str = prompt('Enter currency with currency symbol: ');
    alert('Result: ' + extractCurrencyValue(str));

}