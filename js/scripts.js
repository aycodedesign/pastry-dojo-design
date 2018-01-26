// document ready says 'wait until document is ready before doing anything else'
$(document).ready(function() {

  /*-------------------------------------
  | Animating The Scroll
  -------------------------------------*/

  //whenever a nav anchor is clicked, do what is in the brackets
  $('nav a').click(function() {

    //1. kill the default behavior
    event.preventDefault();

    //2. figure out which section to animate to
    //this variable adjusts WHERE clickscroll stops
    var offset = 75;

    var whichSect = $(this).attr('href');

    //3. animate to section

    //https://stackoverflow.com/questions/832860/how-to-scroll-the-window-using-jquery-scrollto-function
    $('html, body').animate({
      scrollTop: $(whichSect).offset().top - offset
  }, 1000);
  });

  //determines how far down the page navbar sticks
  $(window).scroll(function() {
    var howFar = $(window).scrollTop();
    console.log(howFar);

    if (howFar >= 1) {
      $('body').addClass('pinned');
      // console.log('pinned');
    } else {
      {
        $('body').removeClass('pinned');
        // console.log('unpinned');
      }
    }
  });

});

// When the user scrolls down 20px from the top of the document, show the 'UP!' button
// window.onscroll = function() {
//   scrollFunction()
// };
//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scrollUp").style.display = "block";
//   } else {
//     document.getElementById("scrollUp").style.display = "none";
//   }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }