// Animación al hacer scroll
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Video de bienvenida: ocultar video al hacer clic en cualquier parte
document.addEventListener('DOMContentLoaded', () => {
  const videoContainer = document.getElementById('welcome-video-container');
  videoContainer.addEventListener('click', () => {
    videoContainer.style.display = 'none';
    document.body.classList.remove('loading');
  });
});
