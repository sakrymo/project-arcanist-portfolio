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
  const isLight = storage.getItem("lightTheme") == "true";

  element.addEventListener("click", (e) => {
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