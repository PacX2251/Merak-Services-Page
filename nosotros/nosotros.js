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
    var container = document.querySelector('.about-us__images-img3');
    var container2 = document.querySelector('.about-us__description__title');
    
    if (isElementInViewport(container)) {
      container.classList.add('visible');
      /*window.removeEventListener('scroll', handleVisibility);*/
    }
    if (isElementInViewport(container2)) {
      container2.classList.add('visible');
    }
  }

  window.addEventListener('scroll', handleVisibility);