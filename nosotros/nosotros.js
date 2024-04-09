function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleVisibility() {
    var container = document.querySelector('.about-us__container');
    if (isElementInViewport(container)) {
      container.classList.add('visible');
      window.removeEventListener('scroll', handleVisibility);
    }
  }
  
  window.addEventListener('scroll', handleVisibility);