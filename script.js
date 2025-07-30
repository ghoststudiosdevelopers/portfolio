// Mode & Sound Toggle
const toggleMode = document.getElementById('toggleMode');
const soundToggle = document.getElementById('soundToggle');
let isDark = true;
let isMuted = true;

toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('night');
  document.body.classList.toggle('day');
  isDark = !isDark;
  toggleMode.textContent = isDark ? '🌙' : '☀️';
});

soundToggle.addEventListener('click', () => {
  isMuted = !isMuted;
  soundToggle.textContent = isMuted ? '🔇' : '🔊';
  // Add sound logic if needed
});

// Smooth scroll
document.querySelector('.cta').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".content", { opacity: 0, y: -50, duration: 1.5, ease: "power4.out" });
gsap.from(".section", {
  scrollTrigger: { trigger: ".section", start: "top 80%" },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power2.out",
});

// Lottie Ghost
lottie.loadAnimation({
  container: document.getElementById("ghostAnim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://lottie.host/f9bfbf0e-3918-49c7-b2c7-54b5245f0e17/nmQmjPo3ep.json"
});

// Animate all .section on scroll
document.querySelectorAll(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});


// ☰ Mobile Menu
const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
