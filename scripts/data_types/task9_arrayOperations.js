function arrayOperations() {

    let styles = ['Jazz', 'Blues'];
    alert('Start: ' + styles);

    styles.push('Rock-N-Roll');
    alert('Plus RNR: ' + styles);

    styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
    alert('Replace middle value for Classic: ' + styles);

    alert('Remove first element and show him: ' + styles.shift())

    styles.unshift('Raggy', 'Rap');
    alert('Added Rap and Raggy in begin: ' + styles);

}