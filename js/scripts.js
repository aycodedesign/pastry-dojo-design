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

    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
    const overlayClose = overlay.querySelector('.close');

    function generateHTML([h, v]) {
        return `
      <div class="item h${h} v${v}">
        <img src="./img/${randomNumber(12)}.jpg">
        <div class="item__overlay">
          <button>View-></button>  
        </div>
      </div>
    `;
    }

    function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }

    function handleClick(e) {
        const src = e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
        overlay.classList.add('open');
    }

    function close() {
        overlay.classList.remove('open');
    }

    const digits = Array.from({
        length: 50
    }, () => [randomNumber(4), randomNumber(4)]).concat([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1]
    ]);
    // console.log(digits);

    const html = digits.map(generateHTML).join('');
    // console.log(html);
    gallery.innerHTML = html;

    const items = document.querySelectorAll('.item');

    items.forEach(item => item.addEventListener('click', handleClick));

    overlayClose.addEventListener('click', close);

}); //end READY FUNCTION