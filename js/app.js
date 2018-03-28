(() => {
$(document).foundation()

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
  offset = 500;
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
    btButton.classList.remove("not-visible");
    btButton.classList.add("visible");
  } else {
    btButton.classList.remove("visible");
    btButton.classList.add("not-visible");
  }
});

//Play Video
let   coverButton = document.querySelector('.cover_button'),
      video = document.querySelector('video'),
      lightbox = document.querySelector('.lightbox'),
      volumeBar = document.querySelector('.volume-bar'),
      closeLightbox = document.querySelector('.close-lightbox');

      function playVideo(){        
        lightbox.classList.add('show-lightbox');
        video.volume = 0.5;
        volumeBar.value = 0.5;
        video.load();
        video.play();
      };

coverButton.addEventListener('click', playVideo);

})();
