const contactBtn = document.getElementById("contact-btn");
const contactSection = document.getElementById("contact-section");

contactBtn.onclick = () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
};
