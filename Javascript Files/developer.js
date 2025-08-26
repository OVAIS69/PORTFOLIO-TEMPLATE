// Simple intro animations using GSAP if available
(function(){
  if (typeof gsap === 'undefined') return;

  // Split title into characters for staggered animation (no external plugins)
  var titleEl = document.querySelector('.hero h1');
  if (titleEl && titleEl.childElementCount === 0) {
    var original = titleEl.textContent;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < original.length; i++) {
      var ch = original[i];
      var span = document.createElement('span');
      span.className = 'char';
      span.innerHTML = ch === ' ' ? '&nbsp;' : ch;
      frag.appendChild(span);
    }
    titleEl.setAttribute('aria-label', original);
    titleEl.innerHTML = '';
    titleEl.appendChild(frag);
  }

  // Animate title letters
  gsap.from('.hero h1 .char', {y:40, opacity:0, duration:0.9, ease:'power3.out', stagger:0.02});

  // Animate subtitle, paragraph and CTAs
  gsap.from('.hero h2', {y:18, opacity:0, duration:0.7, ease:'power2.out', delay:0.05});
  gsap.from('.hero p', {y:16, opacity:0, duration:0.8, delay:0.15, ease:'power2.out'});
  gsap.from('.hero-cta .btn', {y:12, opacity:0, duration:0.6, delay:0.25, stagger:0.08, ease:'power2.out'});

  // Sections on scroll
  gsap.from('.services .card', {y:24, opacity:0, duration:0.7, stagger:0.08, delay:0.2, scrollTrigger:{trigger:'.services', start:'top 80%'}});
  gsap.from('.section-2 .slide', {y:24, opacity:0, duration:0.7, stagger:0.06, scrollTrigger:{trigger:'.section-2', start:'top 80%'}});
  gsap.from('.dev-section-visual .video-box', {y:24, opacity:0, duration:0.7, scrollTrigger:{trigger:'.dev-section-visual', start:'top 85%'}});
  gsap.from('.dev-section-visual .content > *', {y:16, opacity:0, duration:0.6, stagger:0.06, scrollTrigger:{trigger:'.dev-section-visual', start:'top 85%'}});
  gsap.from('.dev-testimonials .testi-copy > *', {y:16, opacity:0, duration:0.6, stagger:0.06, scrollTrigger:{trigger:'.dev-testimonials', start:'top 85%'}});
})();

// Nav links hover animation (match designer page feel)
(function(){
  if (typeof gsap === 'undefined') return;
  var navLinks = document.querySelectorAll('nav ul li');
  navLinks.forEach(function(item){
    item.addEventListener('mouseenter', function(){
      gsap.to(item, { y: -8, duration: 0.5 });
    });
    item.addEventListener('mouseleave', function(){
      gsap.to(item, { y: 0, duration: 0.5 });
    });
  });
})();

// Initialize Swiper and FAQ toggles
(function(){
  try{
    if (typeof Swiper !== 'undefined'){
      // Match designer page Swiper behavior
      new Swiper('.mySwiper', { effect: 'cards', grabCursor: true });
    }
  }catch(e){}

  var faqRows = document.querySelectorAll('.faq-row');
  faqRows.forEach(function(row){
    row.addEventListener('click', function(){
      row.classList.toggle('open');
    });
  });
})();

// Match designer carousel behavior with arrow visibility tweaks
(function(){
  var lftbtn = document.querySelector('.left-button');
  var rgtbtn = document.querySelector('.right-button');
  var slidesHolder = document.querySelector('.slides-holder');
  if (!lftbtn || !rgtbtn || !slidesHolder) return;

  var countbtn = 0;
  function updateArrows(){
    lftbtn.style.display = countbtn === 0 ? 'none' : 'block';
    // Hide right arrow after last step similar to designer's max step (4)
    rgtbtn.style.display = countbtn >= 4 ? 'none' : 'block';
  }
  updateArrows();

  rgtbtn.addEventListener('click', function(){
    if (countbtn === 0){ gsap.to(slidesHolder, { x: '-14.5%' }); countbtn = 1; }
    else if (countbtn === 1){ gsap.to(slidesHolder, { x: '-29%' }); countbtn = 2; }
    else if (countbtn === 2){ gsap.to(slidesHolder, { x: '-43%' }); countbtn = 3; }
    else if (countbtn === 3){ gsap.to(slidesHolder, { x: '-58%' }); countbtn = 4; }
    updateArrows();
  });

  lftbtn.addEventListener('click', function(){
    // Return to start as per designer behavior
    gsap.to(slidesHolder, { x: '0%', duration: 0.5 });
    countbtn = 0;
    updateArrows();
  });
})();

// Overlay tooltips behavior like designer page
(function(){
  var githubIcons = document.querySelectorAll('.overlay i.fa-github');
  var toolGithub = document.querySelectorAll('.tool-github');
  var liveDemoIcons = document.querySelectorAll('.overlay i.fa-solid');
  var toolLiveDemo = document.querySelectorAll('.tool-livedemo');

  githubIcons.forEach(function(icon){
    icon.addEventListener('mouseenter', function(){ toolGithub.forEach(function(t){ t.style.opacity = '100%'; }); });
    icon.addEventListener('mouseleave', function(){ toolGithub.forEach(function(t){ t.style.opacity = '0%'; }); });
  });
  liveDemoIcons.forEach(function(icon){
    icon.addEventListener('mouseenter', function(){ toolLiveDemo.forEach(function(t){ t.style.opacity = '100%'; }); });
    icon.addEventListener('mouseleave', function(){ toolLiveDemo.forEach(function(t){ t.style.opacity = '0%'; }); });
  });
})();


// Contact page subtle animations
(function(){
  if (typeof gsap === 'undefined') return;
  if (document.querySelector('.contact-hero')){
    gsap.from('.contact-hero h2', {y:16, opacity:0, duration:0.6, ease:'power2.out'});
    gsap.from('.contact-hero h1', {y:16, opacity:0, duration:0.7, delay:0.05, ease:'power2.out'});
    gsap.from('.contact-hero p', {y:14, opacity:0, duration:0.7, delay:0.1, ease:'power2.out'});
  }
  if (document.querySelector('.contact-grid')){
    gsap.from('.contact-form, .contact-aside .card', {
      y:20, opacity:0, duration:0.7, stagger:0.08,
      scrollTrigger:{trigger:'.contact-page', start:'top 85%'}
    });
  }
})();

// Enhanced contact page animations and interactions
(function(){
  if (typeof gsap === 'undefined') return;
  var hero = document.querySelector('.contact-hero');
  var grid = document.querySelector('.contact-grid');
  if (!hero && !grid) return;

  // Entry animation
  gsap.from('.contact-hero h2, .contact-hero h1, .contact-hero p', {
    y: 26, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08
  });

  // Cards and form on scroll
  gsap.from('.contact-form', { y: 24, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 });
  gsap.from('.contact-aside .card', {
    y: 26, opacity: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08,
    scrollTrigger: { trigger: '.contact-page', start: 'top 85%' }
  });

  // Logo strip subtle stagger
  gsap.from('.logo-strip img', {
    y: 10, opacity: 0, duration: 0.5, stagger: 0.05,
    scrollTrigger: { trigger: '.logos', start: 'top 90%' }
  });

  // Inputs subtle focus animation
  var inputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
  inputs.forEach(function(el){
    el.addEventListener('focus', function(){
      gsap.to(el, { duration: 0.2, scale: 1.01 });
    });
    el.addEventListener('blur', function(){
      gsap.to(el, { duration: 0.2, scale: 1 });
    });
  });
})();

// Contact page extras: FAQ toggles and submit toast
(function(){
  // FAQ accordion
  var items = document.querySelectorAll('.contact-faq .faq-item');
  items.forEach(function(it){
    var btn = it.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function(){
      it.classList.toggle('open');
    });
  });

  // Submit toast
  var form = document.querySelector('.contact-form');
  var toast = document.querySelector('.submit-toast');
  if (form && toast){
    form.addEventListener('submit', function(){
      if (typeof gsap !== 'undefined'){
        toast.setAttribute('aria-hidden','false');
        gsap.to(toast, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        setTimeout(function(){
          gsap.to(toast, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in', onComplete: function(){
            toast.setAttribute('aria-hidden','true');
          }});
        }, 2200);
      }
    });
  }

  // CTA + FAQ reveal animations
  if (typeof gsap !== 'undefined'){
    if (document.querySelector('.contact-cta .cta-inner')){
      gsap.from('.contact-cta .cta-inner > *', { y: 16, opacity: 0, duration: 0.6, stagger: 0.08, scrollTrigger:{trigger:'.contact-cta', start:'top 90%'} });
    }
    if (document.querySelector('.contact-faq')){
      gsap.from('.contact-faq .faq-item', { y: 14, opacity: 0, duration: 0.5, stagger: 0.06, scrollTrigger:{trigger:'.contact-faq', start:'top 90%'} });
    }
  }
})();

// Trusted-by logo row reveal
(function(){
  if (typeof gsap === 'undefined') return;
  if (document.querySelector('.contact-trust .logo-row img')){
    gsap.from('.contact-trust .logo-row img', {
      y: 12, opacity: 0, duration: 0.5, stagger: 0.05,
      scrollTrigger: { trigger: '.contact-trust', start: 'top 90%' }
    });
  }
})();

// Locomotive Scroll init for pages that include it
(function(){
  try {
    if (typeof LocomotiveScroll !== 'undefined') new LocomotiveScroll();
  } catch(e) {}
})();

// Logo click transition to home with sliding loader (if elements exist)
(function(){
  var logo = document.querySelector('.nav_logo');
  var buttonLoader = document.querySelector('.button-loader');
  if (!logo || !buttonLoader || typeof gsap === 'undefined') return;
  logo.addEventListener('click', function(e){
    e.preventDefault();
    buttonLoader.style.display = 'flex';
    gsap.to('.lft-slide', { x: '200%', duration: 1 });
    gsap.to('.rgt-slide', { x: '-200%', duration: 1 });
    setTimeout(function(){ window.location.href = '../index.html'; }, 1200);
  });
})();


