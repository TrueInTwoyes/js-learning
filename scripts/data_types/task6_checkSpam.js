function checkSpam(str) {
    return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'));
}

function checkTextForSpam() {

    while (true) {
        
        let str = prompt('If you wanna test checker enter test \nIf you wanna leave enter exit or empty space \nEnter your text for spam checking word "viagra" or "xxx": ');
        if (str === 'test'){
            alert( 'buy ViAgRA now include spam: ' + checkSpam('buy ViAgRA now') );
            alert( 'free xxxxx include spam: ' + checkSpam('free xxxxx') );
            alert( 'innocent rabbit include spam: ' + checkSpam("innocent rabbit") );
        }

        if (str === 'exit' || str === null || str === '') {
            alert( 'Bye');
            break
        }
        
        if (str != 'test') {
            alert( 'Spam includes: ' + checkSpam(str));
        }

    }

}