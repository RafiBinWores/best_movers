const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  mobile.classList.toggle('is-active');
});


var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(photo) {
    fullImgBox.style.display = "flex";
    fullImg.src = photo;
  };
  
  function closeFullImg() {
    fullImgBox.style.display = "none";
  };

ScrollReveal({ 
  reset: true,
  distance: '50px',
  duration: 1500,
  delay: 400
  });
   ScrollReveal().reveal('.nav-container', { delay: 100, origin: 'bottom'});
   ScrollReveal().reveal('.about-details', { delay: 200, origin: 'left'});
   ScrollReveal().reveal('.about-img', { delay: 500, origin: 'left'});
   ScrollReveal().reveal('.counter-container', { delay: 500, origin: 'bottom'});
   ScrollReveal().reveal('.service-title', { delay: 500, origin: 'left'});
   ScrollReveal().reveal('.service-all', { delay: 500, origin: 'left'});
   ScrollReveal().reveal('.service-row ', { delay: 500, origin: 'bottom'});

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
