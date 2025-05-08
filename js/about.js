document.addEventListener("DOMContentLoaded", () => {
  const threads = [
    { id: "thread1", from: "#event1 .corner-pin.right", to: "#event2 .corner-pin.left" },
    { id: "thread2", from: "#event2 .corner-pin.left", to: "#event3 .corner-pin.right" },
    { id: "thread3", from: "#event3 .corner-pin.right", to: "#event4 .corner-pin.left" }
  ];

  function updateThreadPositions() {
    threads.forEach(({ id, from, to }) => {
      const start = document.querySelector(from);
      const end = document.querySelector(to);
      const line = document.getElementById(id);
      if (!start || !end || !line) return;

      const startRect = start.getBoundingClientRect();
      const endRect = end.getBoundingClientRect();
      const svg = document.querySelector('.thread-connections');
      const svgRect = svg.getBoundingClientRect();

      const x1 = startRect.left + startRect.width / 2 - svgRect.left;
      const y1 = startRect.top + startRect.height / 2 - svgRect.top;
      const x2 = endRect.left + endRect.width / 2 - svgRect.left;
      const y2 = endRect.top + endRect.height / 2 - svgRect.top;

      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
    });
  }

  window.addEventListener("resize", updateThreadPositions);
  window.addEventListener("scroll", updateThreadPositions);
  updateThreadPositions();

  // Card reveal logic
  const cards = document.querySelectorAll('.evidence-card');
  const threadsEls = document.querySelectorAll('.thread');
  cards.forEach((card, index) => {
    if (index === 0) {
      card.classList.add('show');
    } else {
      card.classList.add('locked');
    }

    card.addEventListener('click', () => {
      if (card.classList.contains('locked')) return;

      const next = cards[index + 1];
      const thread = threadsEls[index];

      if (next) {
        next.classList.remove('locked');
        next.classList.add('show');
      }

      if (thread) {
        thread.classList.add('visible');
      }
    });
  });

  // Day/Night toggle and lamp logic
  const toggleBtn = document.querySelector('.theme-toggle');
  const lamp = document.querySelector('.night-bulb-container');
  const body = document.body;

  let swayInterval = null;

  function startSwayLoop() {
    if (swayInterval) clearInterval(swayInterval);

    function triggerSway() {
      lamp.classList.remove('sway');
      void lamp.offsetWidth; // force reflow to restart animation
      lamp.classList.add('sway');
    }

    triggerSway();
    swayInterval = setInterval(triggerSway, 8000); // every 8s
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      lamp.style.display = 'flex';
      lamp.classList.remove('drop');
      void lamp.offsetWidth;
      lamp.classList.add('drop');
      startSwayLoop();
    } else {
      lamp.style.display = 'none';
      lamp.classList.remove('sway');
      if (swayInterval) clearInterval(swayInterval);
    }
  });

  // Set icon if needed
  const icon = toggleBtn.querySelector("i");
  window.addEventListener("load", () => {
    if (body.classList.contains("dark")) {
      icon.classList.add("fa-sun");
      lamp.style.display = 'flex';
      startSwayLoop();
    } else {
      icon.classList.add("fa-moon");
    }
  });
});
