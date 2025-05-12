// Store and apply user preference
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('preferredTheme', theme);

  // Show message
  const msg = document.getElementById('message');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 1500);

  // Trigger animation on image
  const logo = document.getElementById('logo');
  logo.classList.add('spin');
  setTimeout(() => logo.classList.remove('spin'), 1000);
}

// Event listeners
document.getElementById('lightBtn').addEventListener('click', () => setTheme('light'));
document.getElementById('darkBtn').addEventListener('click', () => setTheme('dark'));

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('preferredTheme') || 'light';
  setTheme(savedTheme);
};