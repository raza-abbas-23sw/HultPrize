const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => 
        {nav.classList.remove('activ')
  });
    link.classList.add('activ');
  });
});

gsap.from(".col-md-4",{
  y:20,
  opacity:0,
  duration:1,
  // stagger:1
})
gsap.from(".hult-section img",{
  y:70,
  opacity:0,
  duration:1,
  // delay:1
  // stagger:1
})

gsap.from(".hult-content",{
  y:-70,
  opacity:0,
  duration:1,
  // delay:1
  // stagger:1
})
gsap.from("#home h2, #home h1",{
  scale:0,
  delay:1,
  stagger:.5
  // opacity:0,
  // duration:1,
  // delay:1
  // stagger:1
})
gsap.from(".achievement-box",{
  y:10,
  scale:0,
  opacity:0,
  duration:.3,
  // delay:1
  stagger:1
})
