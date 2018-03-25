$(document).foundation()

(() => {
//Mobile Menu Icon Toggle
document.querySelector('.mobile-icon').addEventListener('click', function() {
  mobileIcon = document.querySelector('.mobile-icon');
  mobileIcon.classList.toggle('active');
});

document.querySelector('.js-off-canvas-overlay').addEventListener('click', function() {
  mobileIcon = document.querySelector('.mobile-icon');
  mobileIcon.classList.toggle('active');
});


//Header add Class on Scroll & Back to Top
window.addEventListener('scroll', function(){
  header = document.querySelector('header');
  btButton = document.querySelector('.backtotop');
  offset = 300;
  offset_opacity = 1200;
  scrollpos = window.scrollY;

  if(scrollpos > 50){
    header.classList.add("small");
    header.classList.remove("large");
  }
  else {
    header.classList.add("large");
    header.classList.remove("small");
  }

  if (scrollpos > offset) {
    btButton.classList.add("cd-is-visible");
  } else {
    btButton.classList.remove("cd-is-visible cd-fade-out");
  }
  if (scrollpos > offset_opacity) {
    btButton.classList.add("btop-fade-out");
  }
});

//Back to Top
var scroll_top_duration = 700;




  // function backToTop() {
  //   if (window.pageYOffset > 0) {
  //     window.scrollBy(0, -80);
  //     setTimeout(backToTop, 0);
  //   }
  // }

  btButton.addEventListener('click', backToTop);

})();
