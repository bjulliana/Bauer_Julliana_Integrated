(() => {
  $(document).foundation()

  var mobileIcon = document.querySelector('.mobile-icon');
  var canvasOverlay = document.querySelector('.js-off-canvas-overlay');
  var closeButton = document.querySelectorAll('.close-button');
  var body = document.querySelector('body');
  var html = document.querySelector('html');
  var btButton = document.querySelector('.backtotop');
  var menuMobile = document.querySelector('.title-bar');
  var aboutSection = document.querySelector('#about');
  var gallerySection = document.querySelector('#gallery');
  var anniversarySection = document.querySelector('#anniversary');
  var contactSection = document.querySelector('#contact');
  var castSection = document.querySelector('#cast');
  var header = document.querySelector('header');
  var menu = document.querySelector('.lateralMenu');
  var lightSection = document.querySelectorAll('.light');


  //Mobile Menu Icon Toggle
  function mobileIconChange() {
    mobileIcon.classList.toggle('active');
  };

  //Fix for Fountation Reveal Bug
    closeButton.forEach(el => {
      el.addEventListener('click', function() {
        body.classList.remove('is-reveal-open');
        html.classList.remove('is-reveal-open');
    });
  });

  //Header add Class on Scroll & Back to Top
  function backtoTop() {
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
  };

  //Change Lateral Menu Color on Scroll
  window.addEventListener('scroll', function() {
    lightSection.forEach(el => {
      let sectionOffset = el.getBoundingClientRect();
      if(sectionOffset.top < (menu.offsetHeight) && sectionOffset.bottom > (menu.offsetHeight/2)) {
        header.classList.add('dark-menu');
      }
      else {
        header.classList.remove('dark-menu');
      }
    });
  });


  // //Change Lateral Menu Color on Scroll - WORKING
  // function changeHeaderColor() {
  //   let aboutOffset = aboutSection.getBoundingClientRect();
  //   let galleryOffset = gallerySection.getBoundingClientRect();
  //   let anniversaryOffset = anniversarySection.getBoundingClientRect();
  //   let contactOffset = contactSection.getBoundingClientRect();

  //   if(aboutOffset.top < (menu.offsetHeight) && aboutOffset.bottom > (menu.offsetHeight/2)) {
  //     header.classList.add('dark-menu');
  //   }
  //   else if(galleryOffset.top < (menu.offsetHeight) && galleryOffset.bottom > (menu.offsetHeight/2)) {
  //     header.classList.add('dark-menu');
  //   }
  //   else if(anniversaryOffset.top < (menu.offsetHeight) && anniversaryOffset.bottom > (menu.offsetHeight/2)) {
  //     header.classList.add('dark-menu');
  //   }
  //   else if(contactOffset.top < (menu.offsetHeight) && contactOffset.bottom > (menu.offsetHeight/2)) {
  //     header.classList.add('dark-menu');
  //   }
  //   else {
  //     header.classList.remove('dark-menu');
  //   }
  // }

  // window.addEventListener('scroll', changeHeaderColor);
  mobileIcon.addEventListener('click', mobileIconChange);
  canvasOverlay.addEventListener('click', mobileIconChange);
  window.addEventListener('scroll', backtoTop);
})();
