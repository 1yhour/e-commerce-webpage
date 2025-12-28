// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input input');
  
    // Highlight search bar on focus
    searchInput.addEventListener('focus', () => {
      document.querySelector('.searchbar').classList.add('active');
    });
  
    // Remove highlight when focus is lost
    searchInput.addEventListener('blur', () => {
      document.querySelector('.searchbar').classList.remove('active');
    });
  
    // Submit form on Enter key press
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('form').submit();
      }
    });
  });