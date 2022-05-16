(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const getServerLoadingTime = () => {
      if (!document.cookie.includes('server-loading-time')) return -1;
      return parseInt(
        document.cookie.match(/server-loading-time=(.+?);*/)[1],
        10,
      );
    };
    const loadTime = window.performance.now().toFixed(2);
    document.getElementById(
      'LoadTime',
    ).innerText = `${loadTime} ms (client) + ${getServerLoadingTime()} ms (server)`;

    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach((navLink) => {
      console.log(navLink.getAttribute('href'));
      if (navLink.getAttribute('href') === window.location.pathname) {
        navLink.classList.add('header__inner');
      }
    });
  });
})();
