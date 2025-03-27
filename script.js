// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
      navbar.style.padding = '1rem 0';
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  }
  if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = 'translateY(-100%)';
  } else {
      navbar.style.transform = 'translateY(0)';
      navbar.style.padding = '0.8rem 0';
      navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
  }
  lastScroll = currentScroll;
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
  skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          bar.style.width = bar.style.getPropertyValue('--progress');
      }
  });
};

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          if (entry.target.classList.contains('skill-progress')) {
              entry.target.style.width = entry.target.style.getPropertyValue('--progress');
          }
      }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .about-content, .contact-form').forEach(element => {
  element.classList.add('fade-out');
  observer.observe(element);
});

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
          alert('Please fill in all fields');
          return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
      }
      
      // If validation passes, submit the form
      contactForm.submit();
  });
}

// Add parallax effect to hero section
const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.5;
  heroSection.style.backgroundPositionY = `${rate}px`;
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.getElementById("splash-screen").style.opacity = "0";
      setTimeout(() => {
          document.getElementById("splash-screen").style.display = "none";
          document.getElementById("portfolio").style.display = "block";
      }, 800); // Matches CSS transition time
  }, 3000); // Show splash screen for 3 seconds
});
