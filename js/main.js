window.onscroll = function () {
  const header = document.getElementById("main-header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
};

const floatObj = document.querySelector(".floating-object");
if (floatObj) {
  let ticking = false;

  function updateFloatingObject() {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.04;
    const floatY = scrollY * 0.01;

    floatObj.style.transform = `rotate(${rotation}deg) translateY(${floatY}px)`;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateFloatingObject);
        ticking = true;
      }
    },
    { passive: true },
  );
}

// Admin Panel Navigation
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".admin-section");
  const adminMain = document.querySelector(".admin-main");
  const isMobile = window.innerWidth <= 767;

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all menu items
      menuItems.forEach((m) => m.classList.remove("active"));
      // Add active class to clicked item
      this.classList.add("active");

      // Hide all sections
      sections.forEach((section) => section.classList.remove("active"));

      // Show selected section
      const sectionId = this.getAttribute("data-section");
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add("active");

        // Scroll to top of main content
        if (adminMain) {
          adminMain.scrollTop = 0;
        }

        // On mobile, scroll menu item into view
        if (isMobile) {
          const sidebarMenu = document.querySelector(".sidebar-menu ul");
          if (sidebarMenu) {
            const scrollLeft =
              this.offsetLeft -
              sidebarMenu.offsetWidth / 2 +
              this.offsetWidth / 2;
            sidebarMenu.scrollLeft = scrollLeft;
          }
        }
      }
    });
  });

  // Improve touch responsiveness
  document.addEventListener("touchstart", function () {}, true);

  // Detect viewport orientation changes
  window.addEventListener("orientationchange", function () {
    setTimeout(function () {
      const activeSection = document.querySelector(".admin-section.active");
      if (activeSection && adminMain) {
        adminMain.scrollTop = 0;
      }
    }, 100);
  });
});

// nav links releted

const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("entering");
  navBtn.classList.toggle("entering");
});
