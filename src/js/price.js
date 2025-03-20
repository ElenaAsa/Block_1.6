export default function initPrice() {
  let priceSwiper = null

  function initPriceSwiper() {
    if (window.innerWidth <= 768 && (!priceSwiper || priceSwiper.destroyed)) {
      priceSwiper = new Swiper('.price__content.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.price__pagination.swiper-pagination',
          clickable: true,
        },
      });
    }
    if (window.innerWidth > 768 && priceSwiper && !priceSwiper.destroyed) {
      priceSwiper.destroy();
    }
  }

  initPriceSwiper();

  window.addEventListener('resize', initPriceSwiper);
}
