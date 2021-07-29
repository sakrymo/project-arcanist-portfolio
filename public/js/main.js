// Theme toggle
const storage = window.localStorage;
const bodyElements = document.querySelectorAll('body *');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('mobile-theme-toggle');

setTheme()

if (storage.getItem('lightTheme') === null) {
  storage.setItem('lightTheme', false);
}

[themeToggle, themeToggleMobile].forEach((element) => {

  element.addEventListener("click", (e) => {
    const isLight = storage.getItem("lightTheme") == "true";
    storage.setItem("lightTheme", !isLight);
    setTheme();
  });
});

function setTheme() {
  const isLight = storage.getItem('lightTheme') == 'true';
  if (isLight) {
    bodyElements.forEach(element => element.classList.add('light'));
    document.body.classList.add('light');
  } else {
    bodyElements.forEach(element => element.classList.remove('light'));
    document.body.classList.remove('light');
  }
}
/*! dom-to-image 10-06-2017 */
!function(a){"use strict";function b(a,b){function c(a){return b.bgcolor&&(a.style.backgroundColor=b.bgcolor),b.width&&(a.style.width=b.width+"px"),b.height&&(a.style.height=b.height+"px"),b.style&&Object.keys(b.style).forEach(function(c){a.style[c]=b.style[c]}),a}return b=b||{},g(b),Promise.resolve(a).then(function(a){return i(a,b.filter,!0)}).then(j).then(k).then(c).then(function(c){return l(c,b.width||q.width(a),b.height||q.height(a))})}function c(a,b){return h(a,b||{}).then(function(b){return b.getContext("2d").getImageData(0,0,q.width(a),q.height(a)).data})}function d(a,b){return h(a,b||{}).then(function(a){return a.toDataURL()})}function e(a,b){return b=b||{},h(a,b).then(function(a){return a.toDataURL("image/jpeg",b.quality||1)})}function f(a,b){return h(a,b||{}).then(q.canvasToBlob)}function g(a){"undefined"==typeof a.imagePlaceholder?v.impl.options.imagePlaceholder=u.imagePlaceholder:v.impl.options.imagePlaceholder=a.imagePlaceholder,"undefined"==typeof a.cacheBust?v.impl.options.cacheBust=u.cacheBust:v.impl.options.cacheBust=a.cacheBust}function h(a,c){function d(a){var b=document.createElement("canvas");if(b.width=c.width||q.width(a),b.height=c.height||q.height(a),c.bgcolor){var d=b.getContext("2d");d.fillStyle=c.bgcolor,d.fillRect(0,0,b.width,b.height)}return b}return b(a,c).then(q.makeImage).then(q.delay(100)).then(function(b){var c=d(a);return c.getContext("2d").drawImage(b,0,0),c})}function i(a,b,c){function d(a){return a instanceof HTMLCanvasElement?q.makeImage(a.toDataURL()):a.cloneNode(!1)}function e(a,b,c){function d(a,b,c){var d=Promise.resolve();return b.forEach(function(b){d=d.then(function(){return i(b,c)}).then(function(b){b&&a.appendChild(b)})}),d}var e=a.childNodes;return 0===e.length?Promise.resolve(b):d(b,q.asArray(e),c).then(function(){return b})}function f(a,b){function c(){function c(a,b){function c(a,b){q.asArray(a).forEach(function(c){b.setProperty(c,a.getPropertyValue(c),a.getPropertyPriority(c))})}a.cssText?b.cssText=a.cssText:c(a,b)}c(window.getComputedStyle(a),b.style)}function d(){function c(c){function d(a,b,c){function d(a){var b=a.getPropertyValue("content");return a.cssText+" content: "+b+";"}function e(a){function b(b){return b+": "+a.getPropertyValue(b)+(a.getPropertyPriority(b)?" !important":"")}return q.asArray(a).map(b).join("; ")+";"}var f="."+a+":"+b,g=c.cssText?d(c):e(c);return document.createTextNode(f+"{"+g+"}")}var e=window.getComputedStyle(a,c),f=e.getPropertyValue("content");if(""!==f&&"none"!==f){var g=q.uid();b.className=b.className+" "+g;var h=document.createElement("style");h.appendChild(d(g,c,e)),b.appendChild(h)}}[":before",":after"].forEach(function(a){c(a)})}function e(){a instanceof HTMLTextAreaElement&&(b.innerHTML=a.value),a instanceof HTMLInputElement&&b.setAttribute("value",a.value)}function f(){b instanceof SVGElement&&(b.setAttribute("xmlns","http://www.w3.org/2000/svg"),b instanceof SVGRectElement&&["width","height"].forEach(function(a){var c=b.getAttribute(a);c&&b.style.setProperty(a,c)}))}return b instanceof Element?Promise.resolve().then(c).then(d).then(e).then(f).then(function(){return b}):b}return c||!b||b(a)?Promise.resolve(a).then(d).then(function(c){return e(a,c,b)}).then(function(b){return f(a,b)}):Promise.resolve()}function j(a){return s.resolveAll().then(function(b){var c=document.createElement("style");return a.appendChild(c),c.appendChild(document.createTextNode(b)),a})}function k(a){return t.inlineAll(a).then(function(){return a})}function l(a,b,c){return Promise.resolve(a).then(function(a){return a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(a)}).then(q.escapeXhtml).then(function(a){return'<foreignObject x="0" y="0" width="100%" height="100%">'+a+"</foreignObject>"}).then(function(a){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+b+'" height="'+c+'">'+a+"</svg>"}).then(function(a){return"data:image/svg+xml;charset=utf-8,"+a})}function m(){function a(){var a="application/font-woff",b="image/jpeg";return{woff:a,woff2:a,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:b,jpeg:b,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function b(a){var b=/\.([^\.\/]*?)$/g.exec(a);return b?b[1]:""}function c(c){var d=b(c).toLowerCase();return a()[d]||""}function d(a){return a.search(/^(data:)/)!==-1}function e(a){return new Promise(function(b){for(var c=window.atob(a.toDataURL().split(",")[1]),d=c.length,e=new Uint8Array(d),f=0;f<d;f++)e[f]=c.charCodeAt(f);b(new Blob([e],{type:"image/png"}))})}function f(a){return a.toBlob?new Promise(function(b){a.toBlob(b)}):e(a)}function g(a,b){var c=document.implementation.createHTMLDocument(),d=c.createElement("base");c.head.appendChild(d);var e=c.createElement("a");return c.body.appendChild(e),d.href=b,e.href=a,e.href}function h(){var a=0;return function(){function b(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}return"u"+b()+a++}}function i(a){return new Promise(function(b,c){var d=new Image;d.onload=function(){b(d)},d.onerror=c,d.src=a})}function j(a){var b=3e4;return v.impl.options.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+(new Date).getTime()),new Promise(function(c){function d(){if(4===g.readyState){if(200!==g.status)return void(h?c(h):f("cannot fetch resource: "+a+", status: "+g.status));var b=new FileReader;b.onloadend=function(){var a=b.result.split(/,/)[1];c(a)},b.readAsDataURL(g.response)}}function e(){h?c(h):f("timeout of "+b+"ms occured while fetching resource: "+a)}function f(a){console.error(a),c("")}var g=new XMLHttpRequest;g.onreadystatechange=d,g.ontimeout=e,g.responseType="blob",g.timeout=b,g.open("GET",a,!0),g.send();var h;if(v.impl.options.imagePlaceholder){var i=v.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(h=i[1])}})}function k(a,b){return"data:"+b+";base64,"+a}function l(a){return a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function m(a){return function(b){return new Promise(function(c){setTimeout(function(){c(b)},a)})}}function n(a){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}function o(a){return a.replace(/#/g,"%23").replace(/\n/g,"%0A")}function p(a){var b=r(a,"border-left-width"),c=r(a,"border-right-width");return a.scrollWidth+b+c}function q(a){var b=r(a,"border-top-width"),c=r(a,"border-bottom-width");return a.scrollHeight+b+c}function r(a,b){var c=window.getComputedStyle(a).getPropertyValue(b);return parseFloat(c.replace("px",""))}return{escape:l,parseExtension:b,mimeType:c,dataAsUrl:k,isDataUrl:d,canvasToBlob:f,resolveUrl:g,getAndEncode:j,uid:h(),delay:m,asArray:n,escapeXhtml:o,makeImage:i,width:p,height:q}}function n(){function a(a){return a.search(e)!==-1}function b(a){for(var b,c=[];null!==(b=e.exec(a));)c.push(b[1]);return c.filter(function(a){return!q.isDataUrl(a)})}function c(a,b,c,d){function e(a){return new RegExp("(url\\(['\"]?)("+q.escape(a)+")(['\"]?\\))","g")}return Promise.resolve(b).then(function(a){return c?q.resolveUrl(a,c):a}).then(d||q.getAndEncode).then(function(a){return q.dataAsUrl(a,q.mimeType(b))}).then(function(c){return a.replace(e(b),"$1"+c+"$3")})}function d(d,e,f){function g(){return!a(d)}return g()?Promise.resolve(d):Promise.resolve(d).then(b).then(function(a){var b=Promise.resolve(d);return a.forEach(function(a){b=b.then(function(b){return c(b,a,e,f)})}),b})}var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:d,shouldProcess:a,impl:{readUrls:b,inline:c}}}function o(){function a(){return b(document).then(function(a){return Promise.all(a.map(function(a){return a.resolve()}))}).then(function(a){return a.join("\n")})}function b(){function a(a){return a.filter(function(a){return a.type===CSSRule.FONT_FACE_RULE}).filter(function(a){return r.shouldProcess(a.style.getPropertyValue("src"))})}function b(a){var b=[];return a.forEach(function(a){try{q.asArray(a.cssRules||[]).forEach(b.push.bind(b))}catch(c){console.log("Error while reading CSS rules from "+a.href,c.toString())}}),b}function c(a){return{resolve:function(){var b=(a.parentStyleSheet||{}).href;return r.inlineAll(a.cssText,b)},src:function(){return a.style.getPropertyValue("src")}}}return Promise.resolve(q.asArray(document.styleSheets)).then(b).then(a).then(function(a){return a.map(c)})}return{resolveAll:a,impl:{readAll:b}}}function p(){function a(a){function b(b){return q.isDataUrl(a.src)?Promise.resolve():Promise.resolve(a.src).then(b||q.getAndEncode).then(function(b){return q.dataAsUrl(b,q.mimeType(a.src))}).then(function(b){return new Promise(function(c,d){a.onload=c,a.onerror=d,a.src=b})})}return{inline:b}}function b(c){function d(a){var b=a.style.getPropertyValue("background");return b?r.inlineAll(b).then(function(b){a.style.setProperty("background",b,a.style.getPropertyPriority("background"))}).then(function(){return a}):Promise.resolve(a)}return c instanceof Element?d(c).then(function(){return c instanceof HTMLImageElement?a(c).inline():Promise.all(q.asArray(c.childNodes).map(function(a){return b(a)}))}):Promise.resolve(c)}return{inlineAll:b,impl:{newImage:a}}}var q=m(),r=n(),s=o(),t=p(),u={imagePlaceholder:void 0,cacheBust:!1},v={toSvg:b,toPng:d,toJpeg:e,toBlob:f,toPixelData:c,impl:{fontFaces:s,images:t,util:q,inliner:r,options:{}}};"undefined"!=typeof module?module.exports=v:a.domtoimage=v}(this);
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
document.body.addEventListener('touchmove', e => { if (mobileMenuToggle.checked) e.preventDefault() }, { passive: false })

mobileMenuToggle.addEventListener("change", e => {
  e.target.style.pointerEvents = 'none'
  setTimeout(() => { e.target.style.pointerEvents = ''; }, 300);

  mobileMenuToggle.checked
  ? mobileMenu.classList.add("on")
  : mobileMenu.classList.remove("on");

  mobileMenuToggle.checked
    ? document.body.classList.add('noscroll')
    : document.body.classList.remove('noscroll')
});

// Prevent hashes on anchor links
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

// Smooth scrolling
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).SmoothScroll = t()
}(this, (function () {
  "use strict";
  window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
      var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
        o = this;
      do {
        for (t = n.length; --t >= 0 && n.item(t) !== o;);
      } while (t < 0 && (o = o.parentElement));
      return o
    }),
    function () {
      if ("function" == typeof window.CustomEvent) return !1;

      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
      }
      e.prototype = window.Event.prototype, window.CustomEvent = e
    }(),
    /**
     * requestAnimationFrame() polyfill
     * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
     * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     * @license MIT
     */
    function () {
      for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
        var o = (new Date).getTime(),
          i = Math.max(0, 16 - (o - e)),
          a = window.setTimeout((function () {
            t(o + i)
          }), i);
        return e = o + i, a
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
      })
    }();
  var e = {
      ignore: "[data-scroll-ignore]",
      header: null,
      topOnEmptyHash: !0,
      speed: 500,
      speedAsDuration: !1,
      durationMax: null,
      durationMin: null,
      clip: !0,
      offset: 0,
      easing: "easeInOutCubic",
      customEasing: null,
      updateURL: !0,
      popstate: !0,
      emitEvents: !0
    },
    t = function () {
      var e = {};
      return Array.prototype.forEach.call(arguments, (function (t) {
        for (var n in t) {
          if (!t.hasOwnProperty(n)) return;
          e[n] = t[n]
        }
      })), e
    },
    n = function (e) {
      "#" === e.charAt(0) && (e = e.substr(1));
      for (var t, n = String(e), o = n.length, i = -1, a = "", r = n.charCodeAt(0); ++i < o;) {
        if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        t >= 1 && t <= 31 || 127 == t || 0 === i && t >= 48 && t <= 57 || 1 === i && t >= 48 && t <= 57 && 45 === r ? a += "\\" + t.toString(16) + " " : a += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(i) : "\\" + n.charAt(i)
      }
      return "#" + a
    },
    o = function () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    },
    i = function (e) {
      return e ? (t = e, parseInt(window.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
      var t
    },
    a = function (e, t, n) {
      0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), window.scrollTo(0, t))
    },
    r = function (e, t, n, o) {
      if (t.emitEvents && "function" == typeof window.CustomEvent) {
        var i = new CustomEvent(e, {
          bubbles: !0,
          detail: {
            anchor: n,
            toggle: o
          }
        });
        document.dispatchEvent(i)
      }
    };
  return function (c, u) {
    var s, l, d, m, f = {};
    f.cancelScroll = function (e) {
      cancelAnimationFrame(m), m = null, e || r("scrollCancel", s)
    }, f.animateScroll = function (n, c, u) {
      f.cancelScroll();
      var l = t(s || e, u || {}),
        w = "[object Number]" === Object.prototype.toString.call(n),
        h = w || !n.tagName ? null : n;
      if (w || h) {
        var p = window.pageYOffset;
        l.header && !d && (d = document.querySelector(l.header));
        var g, y, v, S = i(d),
          E = w ? n : function (e, t, n, i) {
            var a = 0;
            if (e.offsetParent)
              do {
                a += e.offsetTop, e = e.offsetParent
              } while (e);
            return a = Math.max(a - t - n, 0), i && (a = Math.min(a, o() - window.innerHeight)), a
          }(h, S, parseInt("function" == typeof l.offset ? l.offset(n, c) : l.offset, 10), l.clip),
          b = E - p,
          A = o(),
          O = 0,
          C = function (e, t) {
            var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
            return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : parseInt(n, 10)
          }(b, l),
          M = function (e) {
            g || (g = e), O += e - g, v = p + b * function (e, t) {
                var n;
                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
              }(l, y = (y = 0 === C ? 0 : O / C) > 1 ? 1 : y), window.scrollTo(0, Math.floor(v)),
              function (e, t) {
                var o = window.pageYOffset;
                if (e == t || o == t || (p < t && window.innerHeight + o) >= A) return f.cancelScroll(!0), a(n, t, w), r("scrollStop", l, n, c), g = null, m = null, !0
              }(v, E) || (m = window.requestAnimationFrame(M), g = e)
          };
        0 === window.pageYOffset && window.scrollTo(0, 0),
          function (e, t, n) {
            t || history.pushState && n.updateURL && history.pushState({
              smoothScroll: JSON.stringify(n),
              anchor: e.id
            }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
          }(n, w, l), "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches ? a(n, Math.floor(E), !1) : (r("scrollStart", l, n, c), f.cancelScroll(!0), window.requestAnimationFrame(M))
      }
    };
    var w = function (e) {
        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (l = e.target.closest(c)) && "a" === l.tagName.toLowerCase() && !e.target.closest(s.ignore) && l.hostname === window.location.hostname && l.pathname === window.location.pathname && /#/.test(l.href)) {
          var t, o;
          try {
            t = n(decodeURIComponent(l.hash))
          } catch (e) {
            t = n(l.hash)
          }
          if ("#" === t) {
            if (!s.topOnEmptyHash) return;
            o = document.documentElement
          } else o = document.querySelector(t);
          (o = o || "#top" !== t ? o : document.documentElement) && (e.preventDefault(), function (e) {
            if (history.replaceState && e.updateURL && !history.state) {
              var t = window.location.hash;
              t = t || "", history.replaceState({
                smoothScroll: JSON.stringify(e),
                anchor: t || window.pageYOffset
              }, document.title, t || window.location.href)
            }
          }(s), f.animateScroll(o, l))
        }
      },
      h = function () {
        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(s)) {
          var e = history.state.anchor;
          "string" == typeof e && e && !(e = document.querySelector(n(history.state.anchor))) || f.animateScroll(e, null, {
            updateURL: !1
          })
        }
      };
    f.destroy = function () {
      s && (document.removeEventListener("click", w, !1), window.removeEventListener("popstate", h, !1), f.cancelScroll(), s = null, l = null, d = null, m = null)
    };
    return function () {
      if (!("querySelector" in document && "addEventListener" in window && "requestAnimationFrame" in window && "closest" in window.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
      f.destroy(), s = t(e, u || {}), d = s.header ? document.querySelector(s.header) : null, document.addEventListener("click", w, !1), s.updateURL && s.popstate && window.addEventListener("popstate", h, !1)
    }(), f
  }
}));

var scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInOutQuad',
  speed: 500,
  speedAsDuration: true
});