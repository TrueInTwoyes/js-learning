function getMaxSubSum(arr) {

    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > 0) {

            tempSum += arr[i];

        } else {

            tempSum = 0
            continue;

        }

        if (maxSum < tempSum) {

            maxSum = tempSum;

        }

    }

    return maxSum;
    
}


function checkMaxSubSum() {
    
    let arr = [];
    let i = 0;

    let value = prompt('Enter "test" for testing \nOr enter a single number to continue entering the array')

    while (true) {   
        
        if (value === 'test' && i === 0) {
            
            let arrTest = [1, -2, 3, 4, -9, 6];
            alert('Max sum for subarray in test array [1, -2, 3, 4, -9, 6]: ' + getMaxSubSum(arrTest));
            break;

        }
    
        if (value === null || value === '' || !isFinite(value) || value.toLowerCase() === 'stop') {
                
            if (i != 0) {

                alert('Max sum for subarray in array [' + arr + '] : ' + getMaxSubSum(arr));
                break;

            } else {

                alert('You enter not a number. Bye');
                break;

            }
    
        }

        if (isFinite(value)) {

            arr[i] = Number(value);
            i++;
            value = prompt('Your array: [' + arr + ']\nEnter next number. For stop enter "stop" or not a number'); 

        }

    }
}