// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Get the hamburger icon and the navigation list
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

// Toggle the 'active' class on the menu when the hamburger icon is clicked
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
