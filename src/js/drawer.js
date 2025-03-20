export default function initDrawer() {
  const drawer = document.querySelector('#drawer');

  // если надо закрыть drawer при клике по оверлею
  // if (drawer) {
  //   drawer.addEventListener('click', closeDrawer);
  // }

  const openDrawerPhoneButtons = document.querySelectorAll('[data-action="drawer-open-phone"]');
  if (openDrawerPhoneButtons && openDrawerPhoneButtons.length) {
    openDrawerPhoneButtons.forEach((button) => {
      button.addEventListener('click', (e) => openDrawer(e, 'phone'));
    })
  }

  const openDrawerChatButtons = document.querySelectorAll('[data-action="drawer-open-chat"]');
  if (openDrawerChatButtons && openDrawerChatButtons.length) {
    openDrawerChatButtons.forEach((button) => {
      button.addEventListener('click', (e) => openDrawer(e, 'chat'));
    })
  }

  const closeDrawerButton = document.querySelector('#drawer-close');
  if (closeDrawerButton) {
    closeDrawerButton.addEventListener('click', closeDrawer);
  }

  function openDrawer(e, type) {
    console.log('openDrawer');
    drawer.classList.add(`drawer--${type}`);
    drawer.classList.add('drawer--open');
  }

  function closeDrawer(e) {
    const content = e.target.closest('.drawer__content')
    const close = e.target.closest('#drawer-close')
    if ((content && close) || (!content && !close)) {
      drawer.classList.remove('drawer--chat');
      drawer.classList.remove('drawer--phone');
      drawer.classList.remove('drawer--open');
    }
  }
}
