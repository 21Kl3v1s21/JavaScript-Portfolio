document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  const homeImage = document.getElementById('home-image');
  const overlay = document.getElementById('transition-overlay');
  
  // Add hover and scroll event listeners
  homeImage.addEventListener('mouseenter', () => {
    const scrollHandler = (e) => {
      // Trigger the transition animation
      overlay.style.transform = 'translateY(0)';
  
      // Redirect to the "About Me" page after the animation completes
      setTimeout(() => {
        window.location.href = 'about.html'; // Replace 'about.html' with your actual page URL
      }, 1000); // Match the duration of the CSS transition
    };
  
    // Add scroll event listener when hovering over the image
    homeImage.addEventListener('wheel', scrollHandler, { once: true });
  
    // Remove the scroll event listener when the mouse leaves the image
    homeImage.addEventListener('mouseleave', () => {
      homeImage.removeEventListener('wheel', scrollHandler);
    });
  });