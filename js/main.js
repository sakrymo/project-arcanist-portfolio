const heroSection = document.getElementById('hero')
const menuHeight = document.querySelector('#navbar').offsetHeight + document.querySelector('.navbar-gradient').offsetHeight


heroSection.style.height = `${window.innerHeight - menuHeight}px`

window.addEventListener('resize', e => {
  heroSection.style.height = `${window.innerHeight - menuHeight}px`;
})