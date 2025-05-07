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

  document.addEventListener('DOMContentLoaded', () => {
    const homeImage = document.getElementById('home-image');
    let zoomLevel = 1; // Start at normal size
    const maxZoomLevel = 1.5; // Maximum zoom level before transition to the next page
  
    // Add scroll event listener
    homeImage.addEventListener('wheel', (e) => {
      e.preventDefault(); // Prevent the default scroll behavior
  
      if (e.deltaY > 0) { // Scroll down (zoom in)
        zoomLevel *= 1.1; // Increase zoom by 10% each scroll
        homeImage.style.transform = `scale(${zoomLevel})`; // Apply zoom effect to the image
      }
  
      // If the zoom level exceeds a threshold, transition to the next page
      if (zoomLevel >= maxZoomLevel) {
        setTimeout(() => {
          window.location.href = 'about.html'; // Redirect to the new page when zoom reaches max level
        }, 500); // Delay transition to allow the zoom effect to complete
      }
    });
  });
  
  
  
  
  