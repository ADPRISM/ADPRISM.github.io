/*
  JavaScript for AD Prism portfolio site
  Handles small dynamic interactions such as updating the footer year and header styling on scroll.
*/

// Update the year in the footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});

// Change header background on scroll for better readability
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    header.style.boxShadow = 'none';
  }
});