


//search



//slider top
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



//carousell products
$(function(){
  $('.crsl-items').carousel({
    visible: 4,
    itemMinWidth: 120,
    itemEqualHeight: 320,
    itemMargin: 10,
  });
  
  $("a[href=#]").on('click', function(e) {
    e.preventDefault();
  });
});


function bacToTop() {
  let button = $('.back-to-top');
  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50){
    button.fadeIn();
  } else {
    button.fadeOut();
  }
});

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  })
}

backToTop();