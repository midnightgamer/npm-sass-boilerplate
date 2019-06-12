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
        }, 2000)
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
};
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        //TODO preventDefault()
        e.defaultPrevented()
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var target = this.hash;
        menu = target;
        $target = $(target);
        $('html', 'body').stop().animate({}, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#side-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#side-nav ul li a').removeClass("active");
            currLink.addClass("active");
            console.log("scolll")
        } else {
            currLink.removeClass("active");
        }
    });
}