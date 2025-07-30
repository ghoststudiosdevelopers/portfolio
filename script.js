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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const btnSpinner = document.getElementById("btnSpinner");
  const statusMessage = document.getElementById("statusMessage");

  // Show spinner
  btnText.textContent = "Sending";
  btnSpinner.style.display = "inline-block";
  statusMessage.textContent = "";

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  fetch("https://script.google.com/macros/s/AKfycbzzIY9TFG22_p_06SER0wrOnXCD8taEh9k7ZwtniVilWMdUGXvTvCnY9qC4kNMeU2zr/exec", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      btnText.textContent = "Sent ✅";
      btnSpinner.style.display = "none";
      statusMessage.textContent = "Thanks! We'll be in touch soon.";
      form.reset();
    })
    .catch((err) => {
      btnText.textContent = "Send";
      btnSpinner.style.display = "none";
      statusMessage.textContent = "❌ Something went wrong. Try again!";
      console.error(err);
    });
});

// ☰ Mobile Menu
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});