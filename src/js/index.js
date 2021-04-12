// ==================================================================
//                 CAROUSEL
// ==================================================================

import Swiper from 'swiper/bundle';

const swiperNews = new Swiper('.swiper-news', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 35,
  centeredSlides: false,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const news = document.querySelector('.swiper-news');
if(news) {
  news.addEventListener('mouseenter', () => {
    swiperNews.autoplay.stop();
  });
  news.addEventListener('mouseleave', () => {
    swiperNews.autoplay.start();
  });
}

// ==================================================================
//                 JQUERY [PLUGINS]
// ==================================================================
import $ from "jquery";
import 'jquery-sticky/jquery.sticky';

//STICKY NAVBAR
$(".navbar").sticky({
  topSpacing:0,
  zIndex: 999,
});

// MOBILE MENU & NAV
const $mbNav = $('.mobile-nav');
const $toggler = $('.hamburger');
const $overlay = $('.mobile-overlay');
$toggler.on('click', function() {
  $(this).toggleClass('is-active');
  $overlay.toggleClass('js__overlay');
  if($mbNav.hasClass('js__toggle')) {
    $mbNav.removeClass('js__toggle');
  } else {
    $mbNav.addClass('js__toggle');
  }
});
$overlay.on('click', function() {
  $toggler.removeClass('is-active');
  $(this).removeClass('js__overlay');
  if($mbNav.hasClass('js__toggle')) {
    $mbNav.removeClass('js__toggle');
  } else {
    $mbNav.addClass('js__toggle');
  }
});

// ====================================================================
//             MODAL POPUP
// ====================================================================
 import 'jquery-modal/jquery.modal';