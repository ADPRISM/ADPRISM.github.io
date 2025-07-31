/*
  Basic interactivity for the portfolio website
  Handles navigation toggling for small screens, dynamic year updates,
  and simple contact form submission handling.
*/

// Toggle mobile navigation
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Close navigation when a link is clicked (mobile)
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && nav.classList.contains('active')) {
    nav.classList.remove('active');
    navToggle.classList.remove('open');
  }
});

// Update footer year automatically
const yearSpan = document.getElementById('year');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Simple contact form submission handler
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation (already enforced by required attributes)
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  // Simulate form submission
  alert('Thank you for your message! I will get back to you soon.');
  // Reset form
  event.target.reset();
  return false;
}