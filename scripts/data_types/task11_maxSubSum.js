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
    
    let arrTest = [1, -2, 3, 4, -9, 6];
    let arr = [];
    let i = 0;

    while(true) {      
        
        let value = prompt('Enter "test" for testing sort \nOr past your array with mask "[0, 1, 2, 3]" \nOr enter your numbers. For break inputing enter "stop"')
        
        if (value === 'test') {
            
            alert('Max sum for subarray in test array [1, -2, 3, 4, -9, 6]: ' + getMaxSubSum(arrTest));
        
        }

        if (isFinite(value)) {

            arr[i] = value;
            i++;
        }

        if (value.toLowerCase() === 'stop') {
            
            alert('Max sum for subarray in array ' + arr + ': ' + getMaxSubSum(arr));
            break;

        }

        if (typeof(value) == String) {
            
            for (let num of object) {
                
            
            }
        
        }

        if (value === null || value === '' || !isFinite(value)) {
            
            if (i != 0) {
                getMaxSubSum(arr);
            } else {
                alert('You enter wrong value. Bye');
                break;
            }

        }
    }
}