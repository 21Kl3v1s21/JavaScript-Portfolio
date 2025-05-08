document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Home image zoom and redirect
  const homeImage = document.getElementById('home-image');
  if (homeImage) {
    let zoomLevel = 1;
    const maxZoomLevel = 1.2;
    homeImage.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && zoomLevel < maxZoomLevel) {
        zoomLevel *= 1.1;
        if (zoomLevel > maxZoomLevel) zoomLevel = maxZoomLevel;
        homeImage.style.transform = `scale(${zoomLevel})`;
      }
      if (zoomLevel >= maxZoomLevel) {
        setTimeout(() => {
          window.location.href = 'about.html';
        }, 100);
      }
    });
  }

  // Typing effect
  const typingElement = document.querySelector('.typing');
  if (typingElement) {
    const titles = [
      "Fullstacker",
      "Web Developer",
      "Frontender",
      "Backender",
      "Tech Geek",
      "Racoon Lover",
      "Cat Lover"
    ];
    let currentTitleIndex = 0;
    setInterval(() => {
      typingElement.textContent = titles[currentTitleIndex];
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }, 1700);
  }

  // Skills bar animation
  const skillSection = document.querySelector('.skills');
  const progressBars = document.querySelectorAll('.progress-in');
  function isInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }
  function animateSkills() {
    if (isInViewport(skillSection)) {
      progressBars.forEach(bar => {
        const value = bar.getAttribute('data-percent');
        bar.style.width = value;
      });
      window.removeEventListener('scroll', animateSkills);
    }
  }
  window.addEventListener('scroll', animateSkills);
  animateSkills();

  // Mobile Navigation Toggle
  const navToggler = document.querySelector('.nav-toggler');
  const nav = document.querySelector('.nav');
  if (navToggler && nav) {
    navToggler.addEventListener('click', () => {
      navToggler.classList.toggle('active');
      nav.classList.toggle('active');
    });
    // Close mobile menu when clicking on a nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
          navToggler.classList.remove('active');
          nav.classList.remove('active');
        }
      });
    });
  }
});