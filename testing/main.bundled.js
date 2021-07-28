(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
8   8 8888 888b. .d88b.    .d88b. 8888 .d88b 88888 888 .d88b. 8b  8
8www8 8www 8  .8 8P  Y8    YPwww. 8www 8P      8    8  8P  Y8 8Ybm8
8   8 8    8wwK' 8b  d8        d8 8    8b      8    8  8b  d8 8  "8
8   8 8888 8  Yb `Y88P'    `Y88P' 8888 `Y88P   8   888 `Y88P' 8   8
*/

const onHomePage =  window.location.pathname === '/' ||
                    window.location.pathname === '/index.html';
if (onHomePage) {

  // Hero section scaling
  const heroSection = document.getElementById('hero')
  const menuHeight = document.querySelector('#navbar').offsetHeight + document.querySelector('.navbar-gradient').offsetHeight

  heroSection.style.height = `${window.innerHeight - menuHeight}px`

  window.addEventListener('resize', e => {
    heroSection.style.height = `${window.innerHeight - menuHeight}px`;
  })

  // We create _______
  let thingsWeCreate = [
    'Logos',
    'Posters',
    'Illustrations',
    'Leaflets',
    'Social Media Ads',
    'Invitations',
    'Visual Identities',
    'Business Cards',
    'Animations',
    'Websites',
    'Banners',
    'Book Covers',
    'Presentations',
    'Social Media Posts',
    'Brochures',
    'Photo Manipulations',
    'Concept Art',
    'Game Assets',
    'Magic'
  ]
  
  const weCreate = document.getElementById('we-create-text')
  let index = 0;
  const delay = 1500;
  const speed = 20;
  let timer = delay;
  const transitionDuration = 500; 

  const replaceWeCreateText = () => weCreate.textContent = thingsWeCreate[index]
  const outWeCreate = () => weCreate.classList.add('hidden')
  const inWeCreate = () => weCreate.classList.remove('hidden')


  const updateWeCreate = () => {
    setTimeout(() => {
      outWeCreate()
      
      setTimeout(() => {
        replaceWeCreateText();
        inWeCreate();
      }, transitionDuration);
      
      let letterCount = thingsWeCreate[index].length;
      timer = delay + letterCount * speed;

      let reachedMaxIndex = (index == thingsWeCreate.length-1);
      index = reachedMaxIndex ? 0 : index + 1;

      updateWeCreate();
    }, timer);
  }

  updateWeCreate();  
}

/*
.d88b  8    .d88b. 888b.    db    8
8P www 8    8P  Y8 8wwwP   dPYb   8
8b  d8 8    8b  d8 8   b  dPwwYb  8
`Y88P' 8888 `Y88P' 888P' dP    Yb 8888
*/

// Mobile navigation
const mobileMenuToggle = document.getElementById('hamburger-toggle');
const mobileMenu = document.getElementById('mobile-menu')
mobileMenuToggle.addEventListener('change', () => {
  mobileMenuToggle.checked ? mobileMenu.classList.add('on') : mobileMenu.classList.remove('on');
})

const hashLinks = document.querySelectorAll('a[href*="#"]'); 
for (link of hashLinks) link.onclick = removeHash; 
function removeHash() { setTimeout(() => history.replaceState({}, document.title, "."), 10); }

// Dynamic Favicon

const node = document.getElementById('favicon-svg');
const faviconCanvas = document.querySelector('#favicon-canvas');
const ctx = faviconCanvas.getContext('2d');
let favicon;

domtoimage.toPng(node, {bgcolor: "#222"})
    .then(function (dataUrl) {
        favicon = new Image();
        favicon.src = dataUrl;
        favicon.id = "favicon-png"
        document.body.append(favicon);
        node.style = "display: none;"
        setTimeout(() => {
          ctx.drawImage(document.getElementById('favicon-png'), 0, 0, faviconCanvas.width,faviconCanvas.height)
          document.getElementById('favicon').href = faviconCanvas.toDataURL()
        }, 500);
    })
    .catch(function (error) {
        console.error('Error: ', error);
    })

// Back to top
const observerBackToTop = new IntersectionObserver(entries => {
  const entry = entries[0];
  const isAboveView = entry.boundingClientRect.y < 0;
  const backToTopButton = document.querySelector('.back-to-top')

  if (isAboveView)  backToTopButton.classList.remove('hidden');
  else              backToTopButton.classList.add('hidden');
})

observerBackToTop.observe(document.getElementById('back-to-top-breakpoint'));

/*
.d88b .d88b. 8b  8 88888    db    .d88b 88888
8P    8P  Y8 8Ybm8   8     dPYb   8P      8
8b    8b  d8 8  "8   8    dPwwYb  8b      8
`Y88P `Y88P' 8   8   8   dP    Yb `Y88P   8
*/

emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
Yb        dP .d88b. 888b. 8  dP
 Yb  db  dP  8P  Y8 8  .8 8wdP
  YbdPYbdP   8b  d8 8wwK' 88Yb
   YP  YP    `Y88P' 8  Yb 8  Yb
*/

},{}]},{},[1]);
