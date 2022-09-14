function filterRangeInPlace (arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i,1);
            i--;
        }
    }

}

function checkFilterRangeInPlace() {

    let arr = [5, 3, 8, 1];
    let a = +prompt('input numbers "from"');
    let b = +prompt('input numbers "to"');

    filterRangeInPlace(arr,a,b);
    alert('result: ' + arr);

}