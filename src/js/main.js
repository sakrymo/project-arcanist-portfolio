const aos = require('aos')

/*
8   8 8888 888b. .d88b.    .d88b. 8888 .d88b 88888 888 .d88b. 8b  8
8www8 8www 8  .8 8P  Y8    YPwww. 8www 8P      8    8  8P  Y8 8Ybm8
8   8 8    8wwK' 8b  d8        d8 8    8b      8    8  8b  d8 8  "8
8   8 8888 8  Yb `Y88P'    `Y88P' 8888 `Y88P   8   888 `Y88P' 8   8
*/

const onHomePage =
  window.location.pathname === '/' || window.location.pathname === '/index.html'

if (onHomePage) {
  // Hero section scaling
  const heroSection = document.getElementById('hero')
  heroSection.style.height = `${window.innerHeight}px`

  window.addEventListener('resize', e => {
    heroSection.style.height = `${window.innerHeight}px`
  })
}

/*
.d88b  8    .d88b. 888b.    db    8
8P www 8    8P  Y8 8wwwP   dPYb   8
8b  d8 8    8b  d8 8   b  dPwwYb  8
`Y88P' 8888 `Y88P' 888P' dP    Yb 8888
*/

// Animate on scroll
aos.init()

// Back to top
const observerBackToTop = new window.IntersectionObserver(entries => {
  const entry = entries[0]
  const isAboveView = entry.boundingClientRect.y < 0
  const backToTopButton = document.querySelector('.back-to-top')

  if (isAboveView) backToTopButton.classList.remove('hidden')
  else backToTopButton.classList.add('hidden')
})

observerBackToTop.observe(document.getElementById('back-to-top-breakpoint'))

// Mobile navigation

const mobileMenuToggle = document.getElementById('hamburger-toggle')
const mobileMenu = document.getElementById('mobile-menu')

window.addEventListener(
  'resize',
  e => (mobileMenu.style.height = window.innerHeight)
)

document.body.addEventListener(
  'touchmove',
  e => {
    if (mobileMenuToggle.checked) e.preventDefault()
  },
  {
    passive: false
  }
)

mobileMenuToggle.addEventListener('change', e => {
  e.target.style.pointerEvents = 'none'
  setTimeout(() => {
    e.target.style.pointerEvents = ''
  }, 500)

  mobileMenuToggle.checked
    ? mobileMenu.classList.add('on')
    : mobileMenu.classList.remove('on')

  mobileMenuToggle.checked
    ? document.body.classList.add('noscroll')
    : document.body.classList.remove('noscroll')
})

// Sticky navigation
let lastScroll = window.scrollY

window.addEventListener('scroll', e => {
  const navbar = document.getElementById('navbar')
  const scrollingUp = lastScroll > window.scrollY
  const navbarShouldHide = navbar.getAttribute('hide') === 'true'
  const isLightTheme = window.localStorage.getItem('lightTheme') === 'true'

  if (window.scrollY < 30) {
    navbar.classList = isLightTheme ? 'light' : ''
  } else if (navbarShouldHide) {
    if (scrollingUp) {
      navbar.classList.add('minimized')
      navbar.classList.remove('hidden')
    } else {
      navbar.classList.remove('minimized')
      navbar.classList.add('hidden')
    }
  } else {
    navbar.classList.add('minimized')
  }

  lastScroll = window.scrollY

  if (document.querySelector('#navbar-progress')) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    document.querySelector(
      '#navbar-progress'
    ).style.transform = `scaleX(${scrolled})`
  }
})

// Change navbar gradient on hover
const galleryItems = document.querySelectorAll('.gallery-item') || false

if (galleryItems) {
  const gradient1 = document.getElementById('navbar-gradient-overlay-1')
  const gradient2 = document.getElementById('navbar-gradient-overlay-2')

  const logoGradientStop1 = document.querySelector('#gradient stop:nth-of-type(1)')
  const logoGradientStop2 = document.querySelector('#gradient stop:nth-of-type(2)')

  const defaultLogoGradientStops = [
    logoGradientStop1.style.stopColor,
    logoGradientStop2.style.stopColor
  ]

  galleryItems.forEach(element => {
    element.addEventListener('mouseover', e => {
      const colors = element.getAttribute('arcanist-colors') || null

      if (colors) {
        const colorsArray = colors.split(',')
        const [color1, color2] = [colorsArray[0], colorsArray[1]]

        const gradientIsActive = window.getComputedStyle(gradient1).opacity > 0

        if (gradientIsActive) {
          gradient2.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`
          gradient2.classList.add('visible')
          gradient1.classList.remove('visible')
        } else {
          gradient1.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`
          gradient1.classList.add('visible')
          gradient2.classList.remove('visible')
        }

        logoGradientStop1.style.stopColor = color1
        logoGradientStop2.style.stopColor = color2
      }
    })

    element.addEventListener('mouseout', e => {
      [gradient1, gradient2].forEach(element => {
        element.classList.remove('visible')
      })

      logoGradientStop1.style.stopColor = defaultLogoGradientStops[0]
      logoGradientStop2.style.stopColor = defaultLogoGradientStops[1]
    })
  })
}

// Prevent hashes on anchor links
const hashLinks = document.querySelectorAll('a[href*="#"]')
for (const link of hashLinks) link.onclick = removeHash

function removeHash () {
  setTimeout(() => window.history.replaceState({}, document.title, '.'), 10)
}

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
const onContact = window.location.pathname === '/contact' || window.location.pathname === '/contact.html'
if (onContact) {
  // * Prevent autofill
  const rowInputs = document.querySelectorAll('.form-row input')
  const chars = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
  const randomStringLength = 6

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)]
  const randomizeName = element => {
    let randomString = ''
    for (let i = 0; i < randomStringLength; i++) { randomString += randomChar() }
    element.setAttribute('name', randomString)
  }

  rowInputs.forEach(element => {
    element.addEventListener('focus', e => randomizeName(element))

    element.addEventListener('focusout', e => {
      const trimmedValue = element.value.trim()
      element.value = ''
      element.value = trimmedValue

      element.setAttribute('name', e.target.getAttribute('fs-name'))
    })
  })

  // * Dropdown
  const categorySelect = document.querySelectorAll('.dropdown-wrapper')[0]
  const dropdownOptions = categorySelect.querySelectorAll('.dropdown-option')

  const openDropdown = dropdown => {
    dropdown.classList.add('on')
    dropdown.childNodes.forEach(element => element.classList.add('on'))
  }

  const closeDropdown = dropdown => {
    dropdown.classList.remove('on')
    dropdown.childNodes.forEach(element => element.classList.remove('on'))
  }

  const getDropdownOptionIndex = str => {
    let i = 0
    for (const element of dropdownOptions) {
      i += 1
      if (element.textContent === str) { return i - 1 }
    }
  }

  const getHoveredDropdownOptionIndex = () => {
    let count = 0
    let index = -1
    for (const element of dropdownOptions) {
      if (element.matches(':hover') || element.matches('.hover')) { index = count }
      count++
    }
    return index
  }

  // Start with empty select input
  document.querySelectorAll('.dropdown-select')[0].selectedIndex = '-1'

  // Mouse click behavior
  categorySelect.addEventListener('click', e => {
    categorySelect.classList.contains('on')
      ? closeDropdown(categorySelect)
      : openDropdown(categorySelect)

    const isDropdownOption = e.target.classList.contains('dropdown-option')

    if (isDropdownOption) {
      const dropdownOptionIndex = getDropdownOptionIndex(e.target.textContent)
      const select = document.querySelectorAll('.dropdown-select')[0]

      select.selectedIndex = dropdownOptionIndex.toString()
      categorySelect.firstChild.textContent = e.target.textContent
    }
  })

  // Button behavior
  categorySelect.addEventListener('keydown', e => {
    // Don't preventDefault() only on tab
    if (e.keyCode !== 9) e.preventDefault()

    // Enter/Spacebar behavior
    if (e.key === 'Spacebar' || e.key === 'Enter' || e.key === ' ' || e.key === 'Space' || e.keyCode === 32) {
      const hoveredOptionIndex = getHoveredDropdownOptionIndex()

      if (hoveredOptionIndex !== -1 && categorySelect.classList.contains('on')) {
        const select = document.querySelectorAll('.dropdown-select')[0]
        select.selectedIndex = hoveredOptionIndex.toString()
        categorySelect.firstChild.textContent = dropdownOptions[hoveredOptionIndex].textContent

        document.getElementById('contact-message').focus()
      }

      categorySelect.classList.contains('on')
        ? closeDropdown(categorySelect)
        : openDropdown(categorySelect)
    }

    // Escape behavior
    if (e.key === 'Escape' || e.keyCode === 27) { closeDropdown(categorySelect) }

    // Arrow behavior
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!categorySelect.classList.contains('on')) e.preventDefault()
      // Detect which options are hovered
      const hoveredOptionIndex = getHoveredDropdownOptionIndex()

      // Get index of next option
      const isLastOption = (hoveredOptionIndex + 1 > dropdownOptions.length - 1)
      const isFirstOption = (hoveredOptionIndex === 0)
      const noHoveredOptions = (hoveredOptionIndex === -1)
      let nextOptionIndex

      if (e.key === 'ArrowDown') {
        nextOptionIndex = (isLastOption || noHoveredOptions)
          ? 0 // First item
          : hoveredOptionIndex + 1 // Increment by 1
      }

      if (e.key === 'ArrowUp') {
        nextOptionIndex = (isFirstOption || noHoveredOptions)
          ? dropdownOptions.length - 1 // Last item
          : hoveredOptionIndex - 1 // Decrement by 1
      }

      // Style the next option as hovered
      dropdownOptions.forEach(element => element.classList.remove('hover'))
      dropdownOptions.forEach(element => element.classList.remove('hoverable'))
      dropdownOptions[nextOptionIndex].classList.add('hover')
    }
  })

  // Make sure the two ways of input don't intersect
  categorySelect.addEventListener('mouseover', e => {
    dropdownOptions.forEach(element => element.classList.remove('hover'))
    dropdownOptions.forEach(element => element.classList.add('hoverable'))
  })

  categorySelect.addEventListener('focusout', e => setTimeout(() => {
    closeDropdown(categorySelect)
  }, 100))

  // * Remember form content until valid submit
  const storage = window.localStorage

  const contactName = document.getElementById('contact-name')
  const contactEmail = document.getElementById('contact-email')
  const contactCategory = document.querySelectorAll('.dropdown-select')[0]
  const contactMessage = document.getElementById('contact-message')

  const updateFormData = () => {
    const formData = {
      name: contactName.value,
      email: contactEmail.value,
      category: contactCategory.selectedIndex,
      message: contactMessage.value,
      wasSubmitted: false
    }
    storage.setItem('contactFormData', JSON.stringify(formData))
  }

  // Update stored formdata on changes
  for (const element of [contactName, contactEmail, contactCategory, contactMessage]) {
    element.addEventListener('input', e => { updateFormData() })
  }

  categorySelect.firstChild.addEventListener('focusout', updateFormData)

  // Populate contact form on load
  const populateContactForm = () => {
    const formDataFromStorage = JSON.parse(storage.getItem('contactFormData'))
    console.log('POPULATE CONTACT FORM DATA')
    console.log(formDataFromStorage)

    /* eslint-disable */
    contactName.value                     = formDataFromStorage.name
    contactEmail.value                    = formDataFromStorage.email
    contactCategory.selectedIndex         = formDataFromStorage.category
    categorySelect.firstChild.textContent = formDataFromStorage.category === -1 ? '' : contactCategory.value
    contactMessage.value                  = formDataFromStorage.message
    /* eslint-enable */
  }

  populateContactForm()

  // Clear data on valid submit and set wasSubmitted to true
  const clearContactFormFromStorage = () => {
    const formData = {
      name: '',
      email: '',
      category: -1,
      message: '',
      wasSubmitted: true
    }
    storage.setItem('contactFormData', JSON.stringify(formData))
  }

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault()
    clearContactFormFromStorage()
    setTimeout(() => { e.target.submit(); populateContactForm() }, 50)
  })
}

// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
Yb        dP .d88b. 888b. 8  dP
Yb  db  dP  8P  Y8 8  .8 8wdP
YbdPYbdP   8b  d8 8wwK' 88Yb
YP  YP    `Y88P' 8  Yb 8  Yb
*/
