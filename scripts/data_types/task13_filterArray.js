function functionRange (arr, a, b) {

    return arr.filter(element => (element >= a && element <=b));

}

function checkFunctionRange() {
    
    let arr = [5, 3, 8, 1];
    let positions = prompt('Input positions in format {0}, {1} for copy array: ' + arr);
    alert(functionRange(arr, positions.slice(0,1), positions.slice(2,3)));

}