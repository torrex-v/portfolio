document.getElementById('year').textContent = new Date().getFullYear();

// Mouse glow effect
const glow = document.querySelector('.mouse-glow');
document.addEventListener('mousemove', e => {
  glow.style.setProperty('--x', e.clientX + 'px');
  glow.style.setProperty('--y', e.clientY + 'px');
});

// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // reveal once
    }
  });
}, { threshold: 0.1 });

// Observe all elements with .reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
