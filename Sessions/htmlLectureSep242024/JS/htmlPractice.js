const logo = document.querySelector('.logo');
const linksContainer = document.querySelector('.links-container');
let timeoutId;

logo.addEventListener('mouseover', () => {
  linksContainer.classList.add('show');
  clearTimeout(timeoutId); // Clear any existing timeout
  timeoutId = setTimeout(() => {
    linksContainer.classList.remove('show');
  }, 2000); // Adjust the delay as needed
});

logo.addEventListener('mouseout', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    linksContainer.classList.remove('show');
  }, 2000);
});

// For mobile devices
logo.addEventListener('touchstart', () => {
  linksContainer.classList.add('show');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    linksContainer.classList.remove('show');
  }, 2000);
});

logo.addEventListener('touchend', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    linksContainer.classList.remove('show');
  }, 2000);
});