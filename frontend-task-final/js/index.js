const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const themeImages = document.querySelectorAll(".theme-img");

// Load theme from localStorage
let isDark = localStorage.getItem("theme") === "dark";

// Apply initial theme
if (isDark) {
  body.classList.add("dark-theme");
}
updateAllThemeImages(isDark);

// On button click, toggle theme and update images
toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateAllThemeImages(isDark);
});

// Function to update all image sources based on theme
function updateAllThemeImages(isDark) {
  themeImages.forEach((img) => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });
}

//signup form error validation

let formId = document.getElementById("formId");

formId.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let error = false;

  if (!username) {
    document.getElementById("usernameError").style.display = "block";
    document.getElementById("username-wrapper").classList.add("border-error");
    error = true;
  } else {
    document.getElementById("usernameError").style.display = "none";
    document
      .getElementById("username-wrapper")
      .classList.remove("border-error");
  }

  if (!email) {
    document.getElementById("emailError").style.display = "block";
    document.getElementById("email-wrapper").classList.add("border-error");
    error = true;
  } else {
    document.getElementById("emailError").style.display = "none";
    document.getElementById("email-wrapper").classList.remove("border-error");
  }

  if (!password) {
    document.getElementById("passwordError").style.display = "block";
    document.getElementById("password-wrapper").classList.add("border-error");
    error = true;
  } else {
    document.getElementById("passwordError").style.display = "none";
    document
      .getElementById("password-wrapper")
      .classList.remove("border-error");
  }
});

const passwordInput = document.getElementById("password");
const togglePasswordIcon = document.getElementById("togglePassword");

// Check current theme
function isDarkMode() {
  return document.body.classList.contains("dark-theme");
}

// Update the password icon based on visibility + theme
function updatePasswordToggleIcon() {
  const isVisible = passwordInput.type === "text";
  const dark = isDarkMode();

  const newIconSrc = isVisible
    ? dark
      ? togglePasswordIcon.dataset.darkShow
      : togglePasswordIcon.dataset.lightShow
    : dark
    ? togglePasswordIcon.dataset.darkHide
    : togglePasswordIcon.dataset.lightHide;

  togglePasswordIcon.src = newIconSrc;
}

// Toggle visibility on icon click
togglePasswordIcon.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "text" ? "password" : "text";
  updatePasswordToggleIcon();
});

// Also update icon on initial load
window.addEventListener("DOMContentLoaded", updatePasswordToggleIcon);
