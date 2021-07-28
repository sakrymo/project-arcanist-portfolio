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
  const menuHeight  = document.querySelector('#navbar').offsetHeight + document.querySelector('.navbar-gradient').offsetHeight

  heroSection.style.height = `${window.innerHeight - menuHeight}px`

  window.addEventListener('resize', e => {
    heroSection.style.height = `${window.innerHeight - menuHeight}px`;
  })
}

/*
.d88b  8    .d88b. 888b.    db    8
8P www 8    8P  Y8 8wwwP   dPYb   8
8b  d8 8    8b  d8 8   b  dPwwYb  8
`Y88P' 8888 `Y88P' 888P' dP    Yb 8888
*/

// Mobile navigation
const mobileMenuToggle = document.getElementById('hamburger-toggle');
const mobileMenu       = document.getElementById('mobile-menu')

window.addEventListener('resize', e => mobileMenu.style.height = window.innerHeight)

mobileMenuToggle.addEventListener("change", () => {
  const preventScrolling = e => e.preventDefault()

  mobileMenuToggle.checked
  ? mobileMenu.classList.add("on")
  : mobileMenu.classList.remove("on");

  const preventScrolling = e => { if (mobileMenuToggle.checked) e.preventDefault() }
  document.body.addEventListener('touchmove', preventScrolling)
});

const hashLinks = document.querySelectorAll('a[href*="#"]'); 
for (link of hashLinks) link.onclick = removeHash; 
function removeHash() { setTimeout(() => history.replaceState({}, document.title, "."), 10); }

// ? Dynamic Favicon
// ? FEATURE CURRENTLY WITHDRAWN [TO BE REVISED]

// const node = document.getElementById('favicon-svg');
// const faviconCanvas = document.querySelector('#favicon-canvas');
// const ctx = faviconCanvas.getContext('2d');
// let favicon;

// domtoimage.toPng(node, {bgcolor: "#222"})
//     .then(function (dataUrl) {
//         favicon = new Image();
//         favicon.src = dataUrl;
//         favicon.id = "favicon-png"
//         document.body.append(favicon);
//         node.style = "display: none;"
//         setTimeout(() => {
//           ctx.drawImage(document.getElementById('favicon-png'), 0, 0, faviconCanvas.width,faviconCanvas.height)
//           document.getElementById('favicon').href = faviconCanvas.toDataURL()
//         }, 500);
//     })
//     .catch(function (error) {
//         console.error('Error: ', error);
//     })

// // Back to top
// const observerBackToTop = new IntersectionObserver(entries => {
//   const entry = entries[0];
//   const isAboveView = entry.boundingClientRect.y < 0;
//   const backToTopButton = document.querySelector('.back-to-top')

//   if (isAboveView)  backToTopButton.classList.remove('hidden');
//   else              backToTopButton.classList.add('hidden');
// })

// observerBackToTop.observe(document.getElementById('back-to-top-breakpoint'));

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
