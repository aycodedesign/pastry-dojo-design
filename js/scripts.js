// document ready says 'wait until document is ready before doing anything else'
$(document).ready(function () {

    /*-------------------------------------
    | Animating The Scroll
    -------------------------------------*/

    //whenever a nav anchor is clicked, do what is in the brackets
    $('a').click(function () {

        //1. kill the default behavior
        event.preventDefault();

        //2. figure out which section to animate to
        
        // this variable adjusts where clickscroll stops
        var offset = 55;

        var whichSection = $(this).attr('href');

        //3. animate to section

        //https://stackoverflow.com/questions/832860/how-to-scroll-the-window-using-jquery-scrollto-function
        $('html, body').animate({
            scrollTop: $(whichSection).offset().top - offset
        }, 750);
    });

    //determines how far down the page navbar sticks
    $(window).scroll(function () {
        var howFar = $(window).scrollTop();
        console.log(howFar);

        if (howFar >= 352) {
            $('nav').addClass('pinned navbar-dark');
            // console.log('pinned');
        } else {
            {
                $('nav').removeClass('pinned navbar-dark');
                // console.log('unpinned');
            }
        }
    });
});