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
    btButton = document.querySelector('.backtotop');
    menuMobile = document.querySelector('.title-bar');

    offset = 500;
    scrollpos = window.scrollY;


    if (scrollpos > 400){
      menuMobile.classList.add("small");
      menuMobile.classList.remove("large");
    }
    else {
      menuMobile.classList.add("large");
      menuMobile.classList.remove("small");
    }

    if (scrollpos > offset) {
      btButton.classList.remove("not-visible");
      btButton.classList.add("visible");
    } else {
      btButton.classList.remove("visible");
      btButton.classList.add("not-visible");
    }
  });

  var aboutSection = document.querySelector('#about');
  var gallerySection = document.querySelector('#gallery');
  var anniversarySection = document.querySelector('#anniversary');
  var contactSection = document.querySelector('#contact');
  var castSection = document.querySelector('#cast');
  var header = document.querySelector('header');
  var menu = document.querySelector('.lateralMenu');


  //Change Menu Color
  function changeHeaderColor() {
    let aboutOffset = aboutSection.getBoundingClientRect();
    let galleryOffset = gallerySection.getBoundingClientRect();
    let anniversaryOffset = anniversarySection.getBoundingClientRect();
    let contactOffset = contactSection.getBoundingClientRect();

    if(aboutOffset.top < (menu.offsetHeight) && aboutOffset.bottom > (menu.offsetHeight/2)) {
      header.classList.add('dark-menu');
    }
    else if(galleryOffset.top < (menu.offsetHeight) && galleryOffset.bottom > (menu.offsetHeight/2)) {
      header.classList.add('dark-menu');
    }
    else if(anniversaryOffset.top < (menu.offsetHeight) && anniversaryOffset.bottom > (menu.offsetHeight/2)) {
      header.classList.add('dark-menu');
    }
    else if(contactOffset.top < (menu.offsetHeight) && contactOffset.bottom > (menu.offsetHeight/2)) {
      header.classList.add('dark-menu');
    }
    else {
      header.classList.remove('dark-menu');
    }
  }


  window.addEventListener('scroll', changeHeaderColor);
})();
