const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => 
        {nav.classList.remove('activ')
  });
    link.classList.add('activ');
  });
});
