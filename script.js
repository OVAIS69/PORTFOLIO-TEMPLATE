function navLinksAnimation() {
  var navLinks = document.querySelectorAll("nav ul li");

  navLinks.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      gsap.to(e, {
        y: -8,
        duration: 0.5,
      });
    });
    e.addEventListener("mouseleave", function () {
      gsap.to(e, {
        y: 0,
        duration: 0.5,
      });
    });
  });
}
navLinksAnimation();

function ColorChangeAnimation() {
  var Passion1 = document.querySelector(".herobox .passion_1 a");
  var Passion2 = document.querySelector(".herobox .passion_2 a");
  var Passion1Outline = document.querySelector(".herobox .passion_1_outline a");
  var Passion2Outline = document.querySelector(".herobox .passion_2_outline");

  Passion2.addEventListener("mouseenter", function () {
    Passion1.style.color = "transparent";
    Passion2.style.color = "#191919";
    Passion1Outline.style.display = "none";
    Passion2Outline.style.opacity = "100%";
  });
  Passion2.addEventListener("mouseleave", function () {
    Passion2.style.color = "transparent";
    Passion1.style.color = "#191919";
    Passion1Outline.style.display = "block";
    Passion2Outline.style.opacity = "0%";
  });
}

ColorChangeAnimation();

function heroboxImageMoves() {
  var image = document.querySelector(".herobox_image img");

  window.addEventListener("mousemove", function (dets) {
    image.style.left = 1 - dets.clientX * 0.02 + "px";
    image.style.top = 1 - dets.clientY * 0.02 + "px";
  });
}

heroboxImageMoves();

function cursorMovingAnimation() {
  var cursor = document.querySelector(".cursor");
  var cursorImg = document.querySelector(".cursor img");
  var Passion1 = document.querySelector(".herobox .passion_1 a");
  var Passion2 = document.querySelector(".herobox .passion_2 a");
  var intro = document.querySelector(".herobox .intro");

  window.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.pageX + "px";
    cursor.style.top = dets.pageY + "px";
  });

  // Show cursor on mouse enter
  document.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      duration: 0.3
    });
  });

  // Hide cursor on mouse leave
  document.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.3
    });
  });

  // Cursor hover effects for interactive elements
  const hoverElements = document.querySelectorAll("a, button, .designer_btn, .photographer_btn");
  
  hoverElements.forEach(element => {
    element.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3
      });
      gsap.to(cursorImg, {
        rotation: 360,
        duration: 0.3
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3
      });
      gsap.to(cursorImg, {
        rotation: 0,
        duration: 0.3
      });
    });
  });

  Passion1.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1.5,
      opacity: 1,
      duration: 0.5,
    });
  });

  Passion1.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });
  Passion2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1.5,
      opacity: 1,
      duration: 0.5,
    });
  });

  Passion2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });

  intro.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1.5,
      opacity: 1,
      duration: 0.5,
    });
  });

  intro.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    });
  });
}

cursorMovingAnimation();

function LoaderAnimation() {
  var navbar = document.querySelector("nav");
  var loaderWrapper = document.querySelector(".loader_wrapper");
  var leftScreen = document.querySelector(".left_screen");
  var rightScreen = document.querySelector(".right_screen");
  var loaderLogo = document.querySelector(".loading_logo");

  window.addEventListener("load", function () {
    var tl = gsap.timeline({
      onComplete: function () {
        loaderWrapper.style.display = "none";

        gsap.to(navbar, {
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: "navbar",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .intro", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .intro",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_1", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_1",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_2", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_2",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox .passion_1_outline", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox .passion_1_outline",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox_image", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox_image",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to(".herobox p", {
          x: "18%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".herobox p",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to("a.designer_btn", {
          y: "10%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "a.designer_btn",
            start: "top bottom",
            end: "bottom top",
          },
        });

        gsap.to("a.photographer_btn", {
          y: "10%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "a.photographer_btn",
            start: "top bottom",
            end: "bottom top",
          },
        });
      },
    });

    tl.from(
      leftScreen,
      {
        x: "-100%",
        duration: 1,
      },
      "a"
    );
    tl.from(
      rightScreen,
      {
        x: "100%",
        duration: 1,
      },
      "a"
    );
    tl.from(loaderLogo, {
      y: "100%",
      duration: 1,
    });
    tl.to(loaderLogo, {
      y: "100%",
      duration: 1,
      delay: 0.5,
    });
    tl.to(
      leftScreen,
      {
        x: "-100%",
        duration: 1,
      },
      "b"
    );
    tl.to(
      rightScreen,
      {
        x: "100%",
        duration: 1,
      },
      "b"
    );
  });
}

LoaderAnimation();


// Intro video logic: start at 2s, play 3s, slide up overlay
(function(){
  var overlay = document.querySelector('.intro-video-overlay');
  var video = document.querySelector('.intro-video');
  if(!overlay || !video) return;
  function endOverlay(){
    overlay.classList.add('fade');
    setTimeout(function(){
      overlay.classList.add('leave');
      setTimeout(function(){ overlay.style.display = 'none'; }, 900);
    }, 250);
  }
  // Disable intro overlay on mobile viewports
  try{
    if(window.matchMedia && window.matchMedia('(max-width: 768px)').matches){
      endOverlay();
      return;
    }
  }catch(e){}
  var safetyTimer = setTimeout(endOverlay, 5000); // fallback if video can't load/autoplay
  video.addEventListener('loadedmetadata', function(){
    try { video.currentTime = 0; } catch(e) {}
    var playPromise = video.play();
    if(playPromise && playPromise.catch){ playPromise.catch(function(){}); }
    setTimeout(function(){
      try{ video.pause(); }catch(e){}
      endOverlay();
    }, 3000);
  });
  video.addEventListener('error', endOverlay);
  // If metadata is already available (cached), trigger handler synchronously
  if(video.readyState >= 1){
    var evt = new Event('loadedmetadata');
    video.dispatchEvent(evt);
  }
})();

function ButtonClickAnimation(){
  var designerButton = document.querySelector(".herobox a.designer_btn")
var buttonLoader = document.querySelector(".button-loader")

designerButton.addEventListener("click",function(){

  buttonLoader.style.display = "flex"

  gsap.to(".lft-slide",{
    x : "200%",
    duration : 1
  })
  gsap.to(".rgt-slide",{
    x : "-200%",
    duration : 1
  })

  setTimeout(()=>{
    window.location.href = './HTML Files/designer.html'
  }, 3000)

})
}

ButtonClickAnimation()

let toggleIconWhite = document.querySelector(".toggle-icon")
let toggleIconBlack = document.querySelector(".toggle-icon-black")
let toggleMenu = document.querySelector(".toggle-menu")

function openMenu(){
  if(!toggleMenu) return;
  toggleMenu.style.right = "0%";
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  if(!toggleMenu) return;
  toggleMenu.style.right = "-100%";
  document.body.style.overflow = '';
}
if(toggleIconWhite){
  toggleIconWhite.addEventListener("click", openMenu)
}
if(toggleIconBlack){
  toggleIconBlack.addEventListener("click", closeMenu)
}
document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeMenu(); }});
document.addEventListener('click', function(e){
  if(!toggleMenu) return;
  if(toggleMenu.style.right === '0%'){
    var inside = toggleMenu.contains(e.target) || (toggleIconWhite && toggleIconWhite.contains(e.target));
    if(!inside){ closeMenu(); }
  }
});

// Mobile nav toggle (index page), same structure as contact
(function(){
  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  if(!nav || !toggle) return;
  toggle.addEventListener('click', function(){
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('ul a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Back to top reveal
(function(){
  var toTop = document.querySelector('.back-to-top');
  if(!toTop) return;
  function onScroll(){
    if(window.scrollY > 400){ toTop.classList.add('show'); }
    else{ toTop.classList.remove('show'); }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();




















