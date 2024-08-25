const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
};

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// toggleMenu.js

const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
  // Toggle the menu
  if (menuItems.classList.contains('hidden')) {
    menuItems.classList.remove('hidden');
  } else {
    menuItems.classList.add('hidden');
  }
});

// Handle dropdowns in the menu
const dropdownButtons = document.querySelectorAll('#menuItems button');
dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden');
    } else {
      submenu.classList.add('hidden');
    }
  });
});
