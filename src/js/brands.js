export default function initBrands() {
  const brandsMain = document.querySelector('.brands__main');
  const readMoreShow = document.querySelector('.brands__read-more_show');
  const readMoreHide = document.querySelector('.brands__read-more_hide');

  const showBrandsButton = document.querySelector('.brands__read-more.brands__read-more_show');

  showBrandsButton.addEventListener('click', showBrands);

  const hideBrandsButton = document.querySelector('.brands__read-more.brands__read-more_hide');
  hideBrandsButton.addEventListener('click', hideBrands);

  function showBrands() {
    brandsMain.style.height = '100%';
    readMoreShow.style.display = 'none';
    readMoreHide.style.display = 'inline';
  }

  function hideBrands() {
    brandsMain.style.height = '150px';
    readMoreShow.style.display = 'inline';
    readMoreHide.style.display = 'none';
  }

  let swiper = null

  function initSwiper() {
    if (window.innerWidth <= 768 && (!swiper || swiper.destroyed)) {
      swiper = new Swiper('.brands__content.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.brands__pagination.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1.3
          },
          380: {
            slidesPerView: 1.5
          },
          420: {
            slidesPerView: 1.7
          },
          460: {
            slidesPerView: 1.9
          },
          540: {
            slidesPerView: 2
          },
          580: {
            slidesPerView: 2.4
          },
          620: {
            slidesPerView: 2.5
          },
          700: {
            slidesPerView: 2.8
          },
        }
      });
    }
    if (window.innerWidth > 768 && swiper && !swiper.destroyed) {
      swiper.destroy();
    }
  }

  initSwiper();

  window.addEventListener('resize', initSwiper);

  // swiper = new Swiper('.swiper', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   loop: true,
  // spaceBetween: 30,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1.3
  //   },
  //   380: {
  //     slidesPerView: 1.5
  //   },
  //   420: {
  //     slidesPerView: 1.7
  //   },
  //   460: {
  //     slidesPerView: 1.9
  //   },
  //   540: {
  //     slidesPerView: 2
  //   },
  //   580: {
  //     slidesPerView: 2.4
  //   },
  //   620: {
  //     slidesPerView: 2.5
  //   },
  //   700: {
  //     slidesPerView: 2.8
  //   },
  // }
  // });
}
