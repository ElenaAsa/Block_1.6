export default function initViews() {
  const viewsContent = document.querySelector('#views-content');

  const openViewsButton = document.querySelector('#views-read-more-show');
  if (openViewsButton) {
    openViewsButton.addEventListener('click', openViews);
  }

  const closeViewsButton = document.querySelector('#views-read-more-hide');
  if (closeViewsButton) {
    closeViewsButton.addEventListener('click', closeViews);
  }

  function openViews() {
    openViewsButton.style.display = 'none';
    closeViewsButton.style.display = 'inline';
    viewsContent.classList.add('is-open');
  }

  function closeViews() {
    openViewsButton.style.display = 'inline';
    closeViewsButton.style.display = 'none';
    viewsContent.classList.remove('is-open');
  }

  let viewSwiper = null

  function initViewSwiper() {
    if (window.innerWidth <= 768 && (!viewSwiper || viewSwiper.destroyed)) {
      viewSwiper = new Swiper('.views__swiper.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    if (window.innerWidth > 768 && viewSwiper && !viewSwiper.destroyed) {
      viewSwiper.destroy();
    }
  }

  initViewSwiper();

  window.addEventListener('resize', initViewSwiper);
}
