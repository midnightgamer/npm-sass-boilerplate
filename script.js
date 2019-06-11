function copyToClipboard(el) {

    var emailLink = document.getElementById(el);
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);
    try {
        // Now that we've selected the anchor text, execute the copy command
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy command was ' + msg);
        document.querySelector('.tooltip').classList.add('u-appear');
        setTimeout(function () {
            document.querySelector('.tooltip').classList.remove('u-appear');
            document.querySelector('.tooltip').classList.add('u-disappear');
        },2000)
    } catch(err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
};