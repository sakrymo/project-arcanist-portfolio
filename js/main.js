// Hero section scaling
const heroSection = document.getElementById('hero')
const menuHeight = document.querySelector('#navbar').offsetHeight + document.querySelector('.navbar-gradient').offsetHeight

heroSection.style.height = `${window.innerHeight - menuHeight}px`

window.addEventListener('resize', e => {
  heroSection.style.height = `${window.innerHeight - menuHeight}px`;
})

// We create _______
const thingsWeCreate = [
  'Logos',
  'Posters',
  'Illustrations',
  'Leaflets',
  'Flyers',
  'Social Media Ads',
  'Illustrations',
  'Invitations',
  'Visual Identities',
  'Businesss Cards',
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