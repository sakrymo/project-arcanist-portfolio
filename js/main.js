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

// Smooth scrolling
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),
/**
	 * requestAnimationFrame() polyfill
	 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
	 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	 * @license MIT
	 */
function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},a=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(i)}};return function(c,u){var s,l,d,m,f={};f.cancelScroll=function(e){cancelAnimationFrame(m),m=null,e||r("scrollCancel",s)},f.animateScroll=function(n,c,u){f.cancelScroll();var l=t(s||e,u||{}),w="[object Number]"===Object.prototype.toString.call(n),h=w||!n.tagName?null:n;if(w||h){var p=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=i(d),E=w?n:function(e,t,n,i){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-t-n,0),i&&(a=Math.min(a,o()-window.innerHeight)),a}(h,S,parseInt("function"==typeof l.offset?l.offset(n,c):l.offset,10),l.clip),b=E-p,A=o(),O=0,C=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),M=function(e){g||(g=e),O+=e-g,v=p+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===C?0:O/C)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(p<t&&window.innerHeight+o)>=A)return f.cancelScroll(!0),a(n,t,w),r("scrollStop",l,n,c),g=null,m=null,!0}(v,E)||(m=window.requestAnimationFrame(M),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,w,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?a(n,Math.floor(E),!1):(r("scrollStart",l,n,c),f.cancelScroll(!0),window.requestAnimationFrame(M))}};var w=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(c))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!s.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(s),f.animateScroll(o,l))}},h=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};f.destroy=function(){s&&(document.removeEventListener("click",w,!1),window.removeEventListener("popstate",h,!1),f.cancelScroll(),s=null,l=null,d=null,m=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=t(e,u||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",w,!1),s.updateURL&&s.popstate&&window.addEventListener("popstate",h,!1)}(),f}}));

var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutQuad',
  speed: 500,
  speedAsDuration: true
});

const hashLinks = document.querySelectorAll('a[href*="#"]'); 
for (link of hashLinks) link.onclick = removeHash; 
function removeHash() { setTimeout(() => history.replaceState({}, document.title, "."), 10); }

// Dynamic Favicon
/*! dom-to-image 10-06-2017 */

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
