const contactBtn = document.getElementById("contact-btn");
const contactSection = document.getElementById("contact-section");
const barMenu = document.getElementById("bar-menu");
const navLinks = document.getElementById("nav-links-mobile");

const contentWrapper = document.getElementById("content-wrapper");
const xIcon = document.getElementById("x-icon");

/**
 * Smooth scolls to an element on the page
 * @param element HTML element to scroll to
 */
const smoothScroll = (element) => {
  const { top } = element.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //   Offset by the height of navbar
  const targetTop = scrollTop + top - 80;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
  s;
};

// Smooth scroll to the contact section when contact us button is clicked
contactBtn.onclick = () => {
  smoothScroll(contactSection);
};

// Open mobile menu
barMenu.onclick = () => {
  navLinks.classList.add("nav-links-mobile-shown");
};

// When x is clicked, close menu
xIcon.onclick = () => {
  navLinks.classList.remove("nav-links-mobile-shown");
};

// When the page is clicked, close mobile menu
contentWrapper.onclick = () => {
  navLinks.classList.remove("nav-links-mobile-shown");
};

// On window resize, adjust visibility of mobile menu
window.addEventListener("resize", (e) => {
  if (window.innerWidth > 800) {
    navLinks.classList.remove("nav-links-mobile-shown");
  }
});
