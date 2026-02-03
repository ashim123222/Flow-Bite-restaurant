// Header scroll effect
window.onscroll = function () {
  const header = document.getElementById("main-header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
};

// Tab navigation functionality
function openTab(evt, tabName) {
  // 1. Hide all content panels
  let content = document.getElementsByClassName("tab-content");
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }

  // 2. Remove "active" class from all buttons
  let buttons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // 3. Show current tab and add active class to the clicked button
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Nav links mobile menu functionality
const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("entering");
  navBtn.classList.toggle("entering");
});
