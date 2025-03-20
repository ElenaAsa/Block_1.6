export default function initSidebar() {
  const sidebar = document.querySelector('#sidebar');
  if (sidebar) {
    sidebar.addEventListener('click', closeSidebar);
  }

  const openSidebarButton = document.querySelector('#sidebar-open');
  if (openSidebarButton) {
    openSidebarButton.addEventListener('click', openSidebar);
  }

  const closeSidebarButton = document.querySelector('#sidebar-close');
  if (closeSidebarButton) {
    closeSidebarButton.addEventListener('click', closeSidebar);
  }

  function openSidebar() {
    sidebar.classList.add('sidebar--open');
  }

  function closeSidebar(e) {
    const content = e.target.closest('.sidebar')
    const close = e.target.closest('#sidebar-close')
    if ((content && close) || (!content && !close)) {
      sidebar.classList.remove('sidebar--open');
    }
  }
}
