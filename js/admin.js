function openTab(evt, tabName) {
  let adminContent = document.getElementsByClassName("admin-content");
  for (let i = 0; i < adminContent.length; i++) {
    adminContent[i].classList.remove("active");
  }

  let btns = document.getElementsByClassName("admin-nav-btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
