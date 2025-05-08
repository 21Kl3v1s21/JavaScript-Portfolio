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
    const maxZoomLevel = 1.2; // Maximum zoom level before transition to the next page
  
    // Add scroll event listener
    homeImage.addEventListener('wheel', (e) => {
      e.preventDefault(); // Prevent the default scroll behavior
  
      if (e.deltaY > 0) { // Scroll down (zoom in)
        // Prevent zooming beyond maxZoomLevel
        if (zoomLevel < maxZoomLevel) {
          zoomLevel *= 1.1; // Increase zoom by 10% each scroll
          if (zoomLevel > maxZoomLevel) {
            zoomLevel = maxZoomLevel; // Ensure zoom doesn't exceed the max level
          }
          homeImage.style.transform = `scale(${zoomLevel})`; // Apply zoom effect to the image
        }
      }
  
      // If the zoom level exceeds a threshold, transition to the next page
      if (zoomLevel >= maxZoomLevel) {
        setTimeout(() => {
          window.location.href = 'about.html'; // Redirect to the new page when zoom reaches max level
        }, 100); // Delay transition to allow the zoom effect to complete
      }
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const titles = [
      "Fullstack Developer",
      "Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "JavaScript Enthusiast",
      "Tech Geek"
    ];
  
    let currentTitleIndex = 0;
    
    // Function to change the text every 1 second
    const changeText = () => {
      typingElement.textContent = titles[currentTitleIndex];
      currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Cycle through the titles
    };
  
    // Change text every 1 second (1000ms)
    setInterval(changeText, 1700);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress-in');
  
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function animateSkills() {
      if (isInViewport(skillSection)) {
        progressBars.forEach(bar => {
          const value = bar.getAttribute('data-percent');
          bar.style.width = value;
        });
        // Remove scroll listener if you want it to happen only once
        window.removeEventListener('scroll', animateSkills);
      }
    }
  
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Call on load too, in case it's already visible
  });
  